import {NgModule} from '@angular/core';
import {provideRouter, RouterModule, Routes, withComponentInputBinding} from '@angular/router';
import {HomePageComponent} from "./pages/home/home-page/home-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/error/error.module').then((m) => m.ErrorModule),
  },
  {
    path: '**',
    redirectTo: 'error',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ]
})
export class AppRoutingModule { }
