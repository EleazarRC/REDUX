import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';


export const initialState: filtrosValidos = <filtrosValidos>'todos';

export const _filtroReducer = createReducer(
  initialState,
  on( setFiltro , (state, { filtro }) => filtro )

);
