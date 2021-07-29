import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UsersComponent implements OnInit {
users:IUser[];
  constructor(private userService:UserService) {
    this.userService.getUsers().subscribe(value => {
      this.users=value})
  }
  ngOnInit(): void {}
}

