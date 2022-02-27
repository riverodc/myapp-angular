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
  title!: string;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.getAllTodos()
    .subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo() {
    const newTodo: Todo = {
      title: this.title,
      id:'212457',
      userId:'2',
      completed: false,
    };
    this.todoService.createTodo(newTodo)
    .subscribe(todo => {
      console.log(todo);
    });
  }

  updateTodo() {

  }


  onDeleteTodo(todoId:string) {
   console.log(todoId); 
  }

}
