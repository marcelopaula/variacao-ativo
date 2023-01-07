import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VariationSymbolComponent } from './variation-symbol/variation-symbol.component';

const routes: Routes = [{
  path: 'variation-symbol', component: VariationSymbolComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
