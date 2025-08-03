import { Component } from '@angular/core';
import { ProductsStoreItem } from '../services/product/products.storeItem';
import { Products } from '../../products/products';
import { Sidenavigation } from '../sidenavigation/sidenavigation';

@Component({
  selector: 'app-product-gallery.component',
  imports: [Products, Sidenavigation],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.css',
})
export class ProductGalleryComponent {
  constructor(private productsStoreItem: ProductsStoreItem) {}

  onSelectSubCategory(subCategoryId: number): void {
    this.productsStoreItem.loadProducts({ subcategoryId: subCategoryId });
  }
}
