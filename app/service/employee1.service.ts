import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Employee1Service {

  url:string = 'assets/employees1.json'; //local
  //url:string = ''; //network RESTful
  constructor(private httpClient:HttpClient) { }
  getEmployee1Info(){
     return this.httpClient.get(this.url)
}
}