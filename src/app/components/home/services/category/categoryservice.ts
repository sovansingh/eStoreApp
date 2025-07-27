import { Injectable } from '@angular/core';
import { Category } from '../../types/Category';
// import { categories } from '../sampleData/categories.data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Categoryservice {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:5001/productcategories');
  }
  // getAllCategories(): Category[] {
  //   return categories;
  // }
}
