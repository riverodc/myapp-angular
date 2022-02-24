import { Injectable } from '@angular/core';

import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAllUsers(): User[] {
    return [
      {
        name: 'Daniel',
        age: 38,
        isSingle: false,
        avatar: '', 

      },
      {
        name: 'Ana',
        age: 26,
        isSingle: false,
        avatar: '', 

      },
      {
        name: 'Sofia',
        age: 8,
        isSingle: true,
        avatar: '', 

      }

    ]
  } 
}
