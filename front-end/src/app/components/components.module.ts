import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableVariationComponent } from './table-variation/table-variation.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    TableVariationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TableVariationComponent
  ]
})
export class ComponentsModule { }
