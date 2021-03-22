import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }
  //https://reqbin.com/echo/get/json'

  getFileJson(){
    return this.http.get("https://reqbin.com");
  }
}
