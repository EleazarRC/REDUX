import { Action } from './ngrx-fake/ngrx';
import { 
            incrementadorAction, 
            decrementadorAction, 
            multiplicadorAction, 
            divididorAction, 
            reseteadorAction
        } 
        from './contador/constador.actions';
import { reducer } from './contador/contador.reducer';



console.log(reducer( 10, incrementadorAction ));
console.log(reducer( 10, decrementadorAction ));
console.log(reducer( 10, multiplicadorAction ));
console.log(reducer( 10, divididorAction ));
console.log(reducer( 10, reseteadorAction ));

