import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import {LayoutsModule} from "../../core/layouts/layouts.module";


@NgModule({
  declarations: [
    ProductPageComponent,
    ProductDetailsPageComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    LayoutsModule
  ]
})
export class ProductModule { }
