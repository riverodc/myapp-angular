import { Component, OnInit } from '@angular/core';

import { User } from './../../models/user.model';

import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[] = []; 

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers(); 
  }

}
