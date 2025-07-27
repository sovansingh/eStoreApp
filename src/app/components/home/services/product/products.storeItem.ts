import { Injectable, signal } from '@angular/core';
import { Products } from '../../types/Products.type';
import { ProductsService } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductsStoreItem {
  private readonly _products = signal<Products[]>([]);
  readonly products = this._products.asReadonly();

  constructor(private productsService: ProductsService) {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getAllProducts().subscribe((products) => {
      this._products.set(products);
    });
  }
}
