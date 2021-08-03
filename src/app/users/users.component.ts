import { Component, OnInit } from '@angular/core';
import {IUserModel} from "../models/userModel";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUserModel[] =[
    {name:'vasia',age:23,status:false},
    {name:'tania',age:63,status:true},
    {name:'vania',age:33,status:false},
    {name:'valia',age:13,status:true},
    {name:'vadim',age:43,status:false},
      ];
  constructor() { }

  ngOnInit(): void {
  }

}
