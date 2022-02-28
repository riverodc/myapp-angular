import { Injectable } from '@angular/core';
/* aqui solo importamos el cliente de HttpClient */
import { HttpClient } from '@angular/common/http';
/* Como es un array de todos limpio importo el modelo de datos */
import { Todo } from './../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  path = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private http: HttpClient
  ) { }
  /* Metodo para optener todas las tareas */
  getAllTodos() {
    return this.http.get<Todo[]>(this.path);
  }

  /* Metodo para crear todo */
  /* basicamente vamos a crear un (todo) que se ajusta a nuestro modelo de 
  datos (Todo) */

  createTodo(todo:Todo) {

    return this.http.post<Todo>(this.path, todo);

  }

  deleteTodo(todoId: string) {
    const url = `${this.path}/${todoId}`;
    return this.http.delete(url);
  }




}
