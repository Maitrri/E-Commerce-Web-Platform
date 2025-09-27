import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FashionService {

  constructor(private http: HttpClient) { }
  getFashion(){
    return this.http.get('http://localhost:3000/fashion')
  }
}
