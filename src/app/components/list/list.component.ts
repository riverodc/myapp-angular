import { Component, OnInit } from '@angular/core';

/* Función para calcular fibonacci */
const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  name!: string;

  users = [
    {
      name: 'Daniel',
      number: 10
    },

    {
      name: 'Ana',
      number: 23
    },

    {
      name: 'Sofia',
      number: 12
    }

  ];

  constructor() { }
    
  ngOnInit(): void {
  }

  addUser() {
    this.users.push({
      name: this.name,
      number: 5
    });
    /* Limpio el input */
    this.name = ''; 
  }

  calcFib(num: number) {
    console.log('fib'); 
   return fibonacci(num);
  }

}
