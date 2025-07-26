import { Injectable } from '@angular/core';
import { Category } from '../types/Category';
import { categories } from '../sampleData/categories.data';

@Injectable({
  providedIn: 'root',
})
export class Categoryservice {
  constructor() {}

  getAllCategories(): Category[] {
    return categories;
  }
}
