import { Injectable } from '@angular/core';
import { ProductListItem } from './products.type';
import { products } from './Products.data';

@Injectable()
export class Productservice {
  constructor() {}

  getProductsList(): ProductListItem[] {
    return products;
  }
}
