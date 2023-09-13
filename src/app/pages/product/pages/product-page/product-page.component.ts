import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  productId!: number;

  @Input()
  set id(productId: number) {
    this.productId = productId;
  }
}
