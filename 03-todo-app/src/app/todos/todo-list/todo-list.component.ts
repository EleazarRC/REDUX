import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: filtrosValidos = 'todos';

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {

/*     this.store.select('todo').subscribe( todos =>  {
      this.todos = todos;

    }) */
    this.store.subscribe( ({filtro, todo}) => {
      this.filtroActual = filtro;
      this.todos = todo;
    })


  }

}
