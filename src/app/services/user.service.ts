import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {
  }

  doSomeStuff() {

  }

  getUsers() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}


