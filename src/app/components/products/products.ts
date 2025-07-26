import { Component } from '@angular/core';
import { ProductListItem } from './products.type';
import { Productservice } from './productservice';
import { CommonModule } from '@angular/common';
import { Ratings } from '../ratings/ratings';

@Component({
  selector: 'app-products',
  imports: [CommonModule, Ratings],
  templateUrl: './products.html',
  styleUrl: './products.css',
  providers: [Productservice],
})
export class Products {
  products: ProductListItem[] = [];

  constructor(productService: Productservice) {
    this.products = productService.getProductsList();
  }
}
