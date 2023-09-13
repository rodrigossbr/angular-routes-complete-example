import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyHeaderPageComponent } from './components/body-header-page/body-header-page.component';



@NgModule({
  declarations: [
    BodyHeaderPageComponent
  ],
  exports: [
    BodyHeaderPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
