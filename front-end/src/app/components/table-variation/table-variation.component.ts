import { Component, Input, OnInit } from '@angular/core';
import { ITableVariation } from '../table-variation/table-variation.types';

@Component({
  selector: 'app-table-variation',
  templateUrl: './table-variation.component.html',
  styleUrls: ['./table-variation.component.scss']
})

export class TableVariationComponent implements OnInit {
  @Input() dataSource: Array<ITableVariation> = [];
  displayedColumns: string[] = ['day', 'date', 'value', 'variationOne', 'variationTwo'];

  ngOnInit() {}
}
