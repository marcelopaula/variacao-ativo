import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { VariationSymbolComponent } from './variation-symbol/variation-symbol.component';


@NgModule({
  declarations: [
    VariationSymbolComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
