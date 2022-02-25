import { Component, OnInit } from '@angular/core';

import { TodoService } from './../../services/todo.service';

import { Todo } from './../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = []; 

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.getAllTodos()
    .subscribe(todos => {
      this.todos = todos;
    });
  }

  onDeleteTodo(todoId:string) {
   console.log(todoId); 
  }

}
