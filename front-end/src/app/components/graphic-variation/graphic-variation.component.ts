import { Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import * as Highcharts  from 'highcharts';

@Component({
  selector: 'app-graphic-variation',
  templateUrl: './graphic-variation.component.html',
  styleUrls: ['./graphic-variation.component.scss']
})

export class GraphicVariationComponent implements OnInit{
  Highcharts: typeof Highcharts = Highcharts;
  @Input() data: any = [];

  constructor() {}


  chartOptions: Highcharts.Options = {
    title: {
      text: 'PETR4.SA - Variação dos últimos 30 dias',
      align: 'left'
    },
    xAxis: {
      accessibility: {
        rangeDescription: 'Variação: 1 a 30'
      }
    },
    yAxis: {
      title: {
        text: 'Variação do ativo (%)'
      }
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 0
      }
    },
    series: [{
      name: 'PETR4.SA',
      data: this.data,
      type: 'line',
    }],
    tooltip: {
      formatter: function() {
        return `<b>Variação de:</b> ${(this.y?.toFixed(2))}%.`
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const { data } = changes;
    this.chartOptions = {
      ...this.chartOptions,
      series: [{
        data: data.currentValue,
        type: 'line',
        name: 'PETR4.SA',
      }]
    }
  }

  ngOnInit(): void {
  }
}
