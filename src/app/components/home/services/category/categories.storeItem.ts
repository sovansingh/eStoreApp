import { computed, Injectable, signal } from '@angular/core';
import { Category } from '../../types/Category';
import { Categoryservice } from './categoryservice';

@Injectable({
  providedIn: 'root',
})
export class CategoryStoreItem {
  private readonly _categories = signal<Category[]>([]);

  readonly categories = this._categories.asReadonly();

  readonly topLevelCategories = computed(() =>
    this._categories().filter(
      (category) => category.parent_category_id === null
    )
  );

  constructor(private categoryService: Categoryservice) {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService
      .getAllCategories()
      .subscribe((categories) => this._categories.set(categories));
  }
}
