import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/AppState.interfece';
import { reset } from '../constador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent {

  contador!: number;


  constructor( private store: Store<AppState>) {

    this.store.select('contador')
    .subscribe( contador => this.contador = contador);

  }

  reset() {

    this.store.dispatch( reset() )

  }


}
