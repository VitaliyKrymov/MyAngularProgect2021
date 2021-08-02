import {Component, Input, OnInit} from '@angular/core';
import {IUserModel} from "../models/userModel";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @ Input()
  userObj:IUserModel = {name:'',age:0,status:false};
  constructor() { }

  ngOnInit(): void {
  }

}
