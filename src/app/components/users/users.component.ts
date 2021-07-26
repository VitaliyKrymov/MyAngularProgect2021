import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) {
    this.userService.getUsers()
  }
  ngOnInit(): void {}

}


export class UsersComponent {
}
