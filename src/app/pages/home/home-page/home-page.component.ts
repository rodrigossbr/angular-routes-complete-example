import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private router: Router) {}

  async goToProduct(id: number) {
    await this.router.navigate([`/product/${id}`]);
  }

  async goToProductDetails(id: number) {
    await this.router.navigate([`/product/${id}/details`]);
  }
}
