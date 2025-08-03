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

  loadProducts(filters?: {
    maincategoryId?: number;
    subcategoryId?: number;
    keyword?: string;
  }): void {
    this.productsService.getAllProducts(filters).subscribe((products) => {
      this._products.set(products);
    });
  }
}
