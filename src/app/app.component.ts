import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hi first class';
  name = 'Daniel';
  

  
  bibleBooks = ['Exodus', 'Genesis', 'Revelations', 'Jhon']; 
  bibleBookName = '';
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


}
