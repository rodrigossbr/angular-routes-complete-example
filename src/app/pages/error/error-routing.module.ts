import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-not-found',
    pathMatch: 'full'
  },
  {
    path: 'page-not-found',
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule {
}
