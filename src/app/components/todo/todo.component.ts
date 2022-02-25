import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

import { Todo } from './../../models/todo.model'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

 @Input() todo!: Todo;
 @Output() delete = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  /* creamos el metodo delete todo */

  deleteTodo() {
    this.delete.emit(this.todo.id);
  }

}
