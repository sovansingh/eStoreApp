import { Component } from '@angular/core';
// import { Category } from '../types/Category';
// import { Categoryservice } from '../services/categoryservice';
import { CategoryStoreItem } from '../services/category/categories.storeItem';

@Component({
  selector: 'app-catnavigation',
  imports: [],
  templateUrl: './catnavigation.html',
  styleUrl: './catnavigation.css',
})
export class Catnavigation {
  // categories: Category[] = [];

  constructor(public categoryStore: CategoryStoreItem) {}
  // constructor(categoryService: Categoryservice) {
  //   categoryService
  //     .getAllCategories()
  //     .subscribe(
  //       (categories) =>
  //         (this.categories = categories.filter(
  //           (category) => category.parent_category_id === null
  //         ))
  //     );
  // }
}
