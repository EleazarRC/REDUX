import { Action, createReducer, on } from "@ngrx/store";
import { incrementar, decrementat, multiplicar, dividir, reset } from './constador.actions';

export const initialState = 20;

const _contadorReducer  = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementat, (state) => state - 1),
  on(multiplicar, (state, { numero }) => state * numero ),
  on(dividir, (state, { numero }) => state / numero ),
  on(reset, (state) => state = 0),
);

export function contadorReducer(state: number = initialState, action: Action) {
  return _contadorReducer(state, action);
}


/* export function contadorReducer( state: number = 10, action: Action ){

  switch( action.type ) {

    case incrementar.type:
        return state + 1;
    case decrementat.type:
        return state - 1;

    default:
      return state;
  }
}
 */
