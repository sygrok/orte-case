import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  path:string = "http://localhost:3000/products"

  getProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.path);
  }
}
