import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ErrorRoutingModule} from './error-routing.module';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {LayoutsModule} from "../../core/layouts/layouts.module";


@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    LayoutsModule
  ]
})
export class ErrorModule {
}
