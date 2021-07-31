import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpClient:HttpClient) {
  }
  getUsers() :Observable<IUser[]> {
    return this.HttpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
