import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url :string = "http://localhost:8080/products/";

  constructor(private httpClient:HttpClient) { }

  public getAllProducts(){
    return this.httpClient.get(this.url);
  }

  public getAllProductsByCusine(cusine:string){
    return this.httpClient.get(`${this.url}/${cusine}`);
  }

  public createProduct(product:any){
    return this.httpClient.post(`${this.url}`,product);
  }

  public updateProduct(id:string,product:any){
    return this.httpClient.put(`${this.url}/${id}`,product);
  }

  public deleteProduct(id:string){
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
