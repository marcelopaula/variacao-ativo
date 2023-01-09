import { Component, OnInit } from '@angular/core';
import { VariationsService } from 'src/app/services/variations.service';
import { IData } from './variation-symbol.types';
import { ITableVariation } from 'src/app/components/table-variation/table-variation.types';
import { format, fromUnixTime } from 'date-fns';

@Component({
  selector: 'app-variation-symbol',
  templateUrl: './variation-symbol.component.html',
  styleUrls: ['./variation-symbol.component.scss']
})
export class VariationSymbolComponent implements OnInit {
  constructor(
    private service: VariationsService
  ) {}

  openValuesArr!: Array<{value: number, formated: string}>;
  timestampArr!: Array<string>;

  dataTable!: Array<ITableVariation>;

  calcVariation(n1: number, n2: number) {
    return n1 ? ((n2/n1)-1)*100 : 0;
  }

  mountDataForTable() {
    const result: Array<ITableVariation> = [...Array(30).keys()].map((i) => {
      const lastDay = i === 0 ? i : i-1;

      return {
        date: String(this.timestampArr[i]),
        day: i + 1,
        value: this.openValuesArr[i].formated,
        variationOne: `${this.calcVariation(this.openValuesArr[lastDay].value, this.openValuesArr[i].value).toFixed(2)}%`,
        variationTwo: `${this.calcVariation(this.openValuesArr[0].value, this.openValuesArr[i].value).toFixed(2)}%`,
      }
    });
    this.dataTable = result;
    console.log(this.dataTable)
  }

  getValueAndTimestamp(data: IData) {
    this.openValuesArr = data.chart.result[0].indicators.quote[0].open.map((value) => {
      return {
        value,
        formated: new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value)
      };
    });

    this.timestampArr = data.chart.result[0].timestamp.map((i) => {
      return format(fromUnixTime(i), 'dd/MM/yyyy')
    });

    this.mountDataForTable();
  }

  ngOnInit(): void {
   this.service.getVariation().subscribe(
    (res) => {
      this.getValueAndTimestamp(res);
    }
   )
  }
}
