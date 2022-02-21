import { Component } from '@angular/core';

import { Product } from './models/product.model';

/* interface sirve para definir globalmente el tipo de dato de un objeto */
interface User {
  name: string; 
  age: number;
  isSingle: boolean;
  avatar: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hi first class';
  name = 'Daniel';
  

  /* Array Normal typo String */
  bibleBooks: string[] = ['Exodus', 'Genesis']; 

  /* Array de Objetos */
  
  users: User[] = [
    {
      name: 'Daniel',
      age: 38,
      isSingle: false,
      avatar: 'assets/images/daniel.jpg',
    },

    {
      name: 'Ana',
      age: 26,
      isSingle: false,
      avatar: 'assets/images/ana.jpg',
    },

    {
      name: 'Sofia',
      age: 5,
      isSingle: true,
      avatar: 'assets/images/sofia.jpg',
    }

  ];

  bibleBookName = '';

  /* Construimos un array de productos */
  products: Product[] = [
    {
      title: 'Lenovo Legion',
      price: 4000,
      text: 'Gamer Comnputer',
      image: 'assets/images/daniel.jpg',
      
    },
    {
      title: 'Lenovo ThinkPad',
      price: 5000,
      text:'Bussines Computer',
      image: 'assets/images/daniel.jpg',
      
    },
    {
      title: 'Asus Rock',
      price: 4500,
      text:'Gamer Computer',
      image: 'assets/images/daniel.jpg',
    },


  ];






/* Nuevo metodo para agregar un elemento a mi lista */
  addBibleBook() {
    this.bibleBooks.push(this.bibleBookName);
    this.bibleBookName = '';
  }

/* Mi metodo para cambiar titulo*/
  changeTitle() {
    /* Para hacer refencia a variables utilizo la palabra 
    clave this que hace una llamada a mis variables*/
    this.title = 'New Title method > ok'; 
    /* Llamo el metodo privado desde otro metodo */
  }

  empty() {
    this.bibleBooks =[]; 
  }

  deleteItem(index: number) {

    this.bibleBooks.splice(index, 1); 

  }

  updateItem(index: number) {

    this.bibleBooks[index] = 'se cambio'; 

  }


}
