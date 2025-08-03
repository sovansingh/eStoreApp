import { Component, output } from '@angular/core';
// import { Category } from '../types/Category';
// import { Categoryservice } from '../services/categoryservice';
import { CategoryStoreItem } from '../services/category/categories.storeItem';
import { Category } from '../types/Category';

@Component({
  selector: 'app-catnavigation',
  imports: [],
  templateUrl: './catnavigation.html',
  styleUrl: './catnavigation.css',
})
export class Catnavigation {
  readonly categoryClicked = output<number>();
  // categories: Category[] = [];

  constructor(public categoryStore: CategoryStoreItem) {}

  onCategoryClick(mainCategory: Category) {
    this.categoryClicked.emit(mainCategory.id);
  }
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
