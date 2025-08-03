import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../../types/Products.type';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly baseURL = 'http://localhost:5001/products';
  constructor(public http: HttpClient) {}

  getAllProducts(filters?: {
    maincategoryId?: number;
    subcategoryId?: number;
  }): Observable<Products[]> {
    let params = new HttpParams();
    if (filters?.maincategoryId != null) {
      params = params.set('maincategoryId', filters.maincategoryId.toString());
    }
    if (filters?.subcategoryId != null) {
      params = params.set('subcategoryId', filters.subcategoryId.toString());
    }
    return this.http.get<Products[]>(this.baseURL, { params });
  }
  // getAllProducts(): Observable<Products[]> {
  //   return this.http.get<Products[]>('http://localhost:5001/products');
  // }
}
