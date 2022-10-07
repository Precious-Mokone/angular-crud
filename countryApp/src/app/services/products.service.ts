import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: string = "https://fakestoreapi.com/products";
  constructor(private http: HttpClient) { };

  get_All_Products(){

    
      return this.http.get(this.baseUrl);
    
  }
}
