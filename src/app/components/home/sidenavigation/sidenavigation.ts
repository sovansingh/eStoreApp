import { Component, inject, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Category } from '../types/Category';
import { Categoryservice } from '../services/category/categoryservice';
import { CategoryStoreItem } from '../services/category/categories.storeItem';

@Component({
  selector: 'app-sidenavigation',
  imports: [FontAwesomeModule],
  templateUrl: './sidenavigation.html',
  styleUrl: './sidenavigation.css',
})
export class Sidenavigation {
  faAngleDown = faAngleDown;

  private categoryStore = inject(CategoryStoreItem);

  readonly categoies = this.categoryStore.categories;
  readonly subCategoryClicked = output<number>();

  getCategories(parentCategoryId?: number): Category[] {
    return this.categoies().filter((category) =>
      parentCategoryId
        ? category.parent_category_id === parentCategoryId
        : category.parent_category_id === null
    );
  }
  onSubCategoryClick(subCategory: Category): void {
    this.subCategoryClicked.emit(subCategory.id);
    // console.log(
    //   'Subcategory clicked:',
    //   this.subCategoryClicked.emit(subCategory.id)
    // );
  }
  // categories: Category[] = [];

  // constructor(categoryService: Categoryservice) {
  //   categoryService.getAllCategories().subscribe((categories) => {
  //     console.log('Fetched categories:', categories);
  //     this.categories = categories;
  //   });
  // }

  // constructor(categoryService: Categoryservice) {
  //   this.categories = categoryService.getAllCategories();
  // }

  // getCategories(parentCatgoryId?: number): Category[] {
  //   return this.categories.filter((category) =>
  //     parentCatgoryId
  //       ? category.parent_category_id === parentCatgoryId
  //       : category.parent_category_id === null
  //   );
  // }

  // getCategories(parentCatgoryId?: number): Category[] {
  //   return this.categories.filter(
  //     (category) => category.parent_category_id === parentCatgoryId
  //   );
  // }
}
