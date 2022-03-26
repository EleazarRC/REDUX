// Reducer

import { Action } from "../ngrx-fake/ngrx";

// EN EL REDUCER NO SE VA A LLAMAR A NINGUNA FUNCIÓN DEL EXTERIOR PETICIONES HTTP ETC.
export function contadorReducer( state = 10, action: Action ){

    switch( action.type ){
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        case 'RESET':
            return state = 0;
        
        default:
            return state;
    }  
}