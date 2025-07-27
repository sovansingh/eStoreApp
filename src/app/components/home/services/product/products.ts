import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../../types/Products.type';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(public http: HttpClient) {}

  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>('http://localhost:5001/products');
  }
}
