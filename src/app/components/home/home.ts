import { Component } from '@angular/core';
import { Header } from './header/header';
import { Catnavigation } from './catnavigation/catnavigation';
// import { Sidenavigation } from './sidenavigation/sidenavigation';
// import { Products } from '../products/products';
import { RouterOutlet } from '@angular/router';
import { CategoryStoreItem } from './services/category/categories.storeItem';
import { ProductsStoreItem } from './services/product/products.storeItem';
import { SearchKeyword } from './types/SearchKeyword.type';

@Component({
  selector: 'app-home',
  imports: [Header, Catnavigation, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(
    private categoriesStoreItem: CategoryStoreItem,
    private productStoreItem: ProductsStoreItem
  ) {
    this.categoriesStoreItem.loadCategories();
    this.productStoreItem.loadProducts();
  }

  onSelectCategory(mainCategoryId: number): void {
    this.productStoreItem.loadProducts({ maincategoryId: mainCategoryId });
  }

  onSearchKeyword(searchKeyword: SearchKeyword): void {
    this.productStoreItem.loadProducts({
      maincategoryId: searchKeyword.categoryId,
      keyword: searchKeyword.keyword,
    });
  }
}
