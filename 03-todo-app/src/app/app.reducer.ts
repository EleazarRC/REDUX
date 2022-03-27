import { ActionReducerMap } from "@ngrx/store";
import { filtrosValidos } from "./filtro/filtro.actions";
import { _filtroReducer } from "./filtro/filtro.reducer";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reduce";


export interface AppState {
  todo: Todo[],
  filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
                todo: todoReducer,
                filtro: _filtroReducer
}
