import { Injectable } from '@angular/core';
/* aqui solo importamos el cliente de HttpClient */
import { HttpClient } from '@angular/common/http';

import { User } from './../models/user.model';

interface ResponseUsers {
  results: User[];
  /* Ponemos any por que no queremos esa info */
  info: any;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers() {
    return this.http.get<ResponseUsers>('https://randomuser.me/api/?results=5'); 
  } 
}
