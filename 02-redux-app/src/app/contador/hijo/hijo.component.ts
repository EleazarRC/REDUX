import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/AppState.interfece';
import * as actions from '../constador.actions';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent{

/*  @Input() contador: number;
 @Output() cambioContador = new EventEmitter<number>(); */

 /*  @Input() contador: number;
   @Output() cambioContador = new EventEmitter<number>(); */
  contador!: number;

  constructor( private store: Store<AppState>) {

    this.store.select('contador')
    .subscribe( contador => this.contador = contador);


    }

  multiplicar(){
   /*  this.contador *= 2;
    console.log(this.contador);
    this.cambioContador.emit(this.contador); */
    this.store.dispatch( actions.multiplicar({ numero: 3 }));

  }
  dividir(){
  /*   this.contador /= 2;
    console.log(this.contador);
    this.cambioContador.emit(this.contador); */
    this.store.dispatch( actions.dividir({ numero: 3 }));
  }
 /*  resetNieto(event: number | undefined){
    this.contador = 0;
    this.cambioContador.emit( event );
  } */

}
