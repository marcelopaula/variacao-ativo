import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { TableVariationComponent } from './table-variation/table-variation.component';
import { MaterialModule } from '../material/material.module';
import { GraphicVariationComponent } from './graphic-variation/graphic-variation.component';


@NgModule({
  declarations: [
    TableVariationComponent,
    GraphicVariationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HighchartsChartModule
  ],
  exports: [
    TableVariationComponent,
    GraphicVariationComponent
  ]
})
export class ComponentsModule { }
