import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Category } from '../types/Category';
import { Categoryservice } from '../services/categoryservice';

@Component({
  selector: 'app-sidenavigation',
  imports: [FontAwesomeModule],
  templateUrl: './sidenavigation.html',
  styleUrl: './sidenavigation.css',
})
export class Sidenavigation {
  faAngleDown = faAngleDown;
  categories: Category[] = [];

  constructor(categoryService: Categoryservice) {
    categoryService.getAllCategories().subscribe((categories) => {
      console.log('Fetched categories:', categories);
      this.categories = categories;
    });
  }

  // constructor(categoryService: Categoryservice) {
  //   this.categories = categoryService.getAllCategories();
  // }

  getCategories(parentCatgoryId?: number): Category[] {
    return this.categories.filter((category) =>
      parentCatgoryId
        ? category.parent_category_id === parentCatgoryId
        : category.parent_category_id === null
    );
  }

  // getCategories(parentCatgoryId?: number): Category[] {
  //   return this.categories.filter(
  //     (category) => category.parent_category_id === parentCatgoryId
  //   );
  // }
}
