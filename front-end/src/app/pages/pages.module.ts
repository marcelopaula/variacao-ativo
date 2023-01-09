import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ServicesModule } from '../services/services.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { ComponentsModule } from '../components/components.module';

import { VariationSymbolComponent } from './variation-symbol/variation-symbol.component';


@NgModule({
  declarations: [
    VariationSymbolComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ServicesModule,
    HighchartsChartModule,
    ComponentsModule
  ]
})
export class PagesModule { }
