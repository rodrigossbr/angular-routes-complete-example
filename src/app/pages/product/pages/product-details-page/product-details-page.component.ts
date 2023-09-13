import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  productId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(paramMap => {
      this.productId = Number(paramMap.get('id'));
    })
  }
}
