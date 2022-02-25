import { Injectable } from '@angular/core';
/* aqui solo importamos el cliente de HttpClient */
import { HttpClient } from '@angular/common/http';
/* Como es un array de todos limpio importo el modelo de datos */
import { Todo } from './../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }
   
  /* Metodo para optener todas las tareas */
 
  getAllTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
