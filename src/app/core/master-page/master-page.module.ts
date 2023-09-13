import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderPageComponent} from './components/header-page/header-page.component';
import {MenuPageComponent} from './components/menu-page/menu-page.component';
import {TemplateMasterPageComponent} from './components/template-master-page/template-master-page.component';


@NgModule({
  declarations: [
    HeaderPageComponent,
    MenuPageComponent,
    TemplateMasterPageComponent
  ],
  exports: [
    HeaderPageComponent,
    MenuPageComponent,
    TemplateMasterPageComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ]
})
export class MasterPageModule {
}
