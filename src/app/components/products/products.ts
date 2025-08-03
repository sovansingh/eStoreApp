import { Component } from '@angular/core';
import { ProductListItem } from './products.type';
import { Productservice } from './productservice';
import { CommonModule } from '@angular/common';
import { Ratings } from '../ratings/ratings';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { ProductsStoreItem } from '../home/services/product/products.storeItem';

@Component({
  selector: 'app-products',
  imports: [CommonModule, Ratings, FontAwesomeModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
  providers: [Productservice],
})
export class Products {
  faBoxOpen = faBoxOpen;

  constructor(public productsStoreItem: ProductsStoreItem) {}
  // products: ProductListItem[] = [];

  // constructor(productService: Productservice) {
  //   this.products = productService.getProductsList();
  // }
}
