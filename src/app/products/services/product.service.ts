import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  authUrl = environment['apiBaseUrl'];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.authUrl + 'products')
      .pipe(
        map((response: any) => { return response; }
        )
      )
  }
}
