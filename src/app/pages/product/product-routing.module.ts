import { NgModule } from '@angular/core';
import {provideRouter, RouterModule, Routes, withComponentInputBinding} from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';

const routes: Routes = [
  {
    path: ':id',
    component: ProductPageComponent,
  },
  {
    path: ':id/details',
    component: ProductDetailsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }
