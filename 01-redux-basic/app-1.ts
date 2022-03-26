// Acciones
interface Action {
    type: string;
    payload?: any; // Parámetros que le podemos mandar a la acción.
}
/* const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}
const decrementadorAction: Action = {
    type: 'DECREMENTAR'
}
const multiplicadorAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}
const divididorAction: Action = {
    type: 'DIVIDIR',
    payload: 2
} */

// Reducer
// EN EL REDUCER NO SE VA A LLAMAR A NINGUNA FUNCIÓN DEL EXTERIOR PETICIONES HTTP ETC.
function reducer( state = 10, action: Action ){

    switch( action.type ){
        case 'INCREMENTAR':
            return state += 1;
        case 'DECREMENTAR':
            return state -= 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        
        default:
            return state;
    }  
}

// Llamar reducer
console.log(reducer( 10, incrementadorAction ));
console.log(reducer( 10, decrementadorAction ));
console.log(reducer( 10, multiplicadorAction ));
console.log(reducer( 10, divididorAction ));


