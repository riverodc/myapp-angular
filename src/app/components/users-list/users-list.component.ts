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
    /* por lo regular los datos del api demoran unos segundos 
    en cargar hay que hacer un proceso de subscribe para saber que la data 
    este lista o termino el proceso de carga */
    this.userService.getAllUsers() 
    .subscribe(data => {
       this.users = data.results;
        /* como resuls ya esta tipado y es un array puedo asignarlo
         para pasarlo por el modelo de datos User[]  */
    }); 
  }

}
