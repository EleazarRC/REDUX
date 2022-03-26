import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

 @Input() contador: number;
 @Output() cambioContador = new EventEmitter<number>();

  constructor() {
    this.contador = 0;
  }

  ngOnInit(): void {
  }

  multiplicar(){
    this.contador *= 2;
    console.log(this.contador);
    this.cambioContador.emit(this.contador);

  }
  dividir(){
    this.contador /= 2;
    console.log(this.contador);
    this.cambioContador.emit(this.contador);
  }
  resetNieto(event: number | undefined){
    this.contador = 0;
    this.cambioContador.emit( event );
  }

}
