import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/constador.actions';
import { AppState } from './interfaces/AppState.interfece';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number = 0;

  // Igual que en app.module
  constructor( private store: Store<AppState> ) {
   /*  this.contador = 10; */
   this.store.select('contador')
        .subscribe( contador => this.contador = contador)
  }

  incrementar(){
/*     this.contador ++;
    console.log(this.contador); */
    this.store.dispatch( actions.incrementar() )

  }
  decrementar(){
/*     this.contador --;
    console.log(this.contador); */
    this.store.dispatch( actions.decrementat() )
  }

}
