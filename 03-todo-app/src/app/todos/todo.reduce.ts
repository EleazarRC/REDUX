import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toggle, editar, borrar, toggleAll, limpiarTodos } from './todo.actions';


export const estadoInicial: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Aironman'),
  new Todo('Robar escudo del Capitán América'),
];

export const todoReducer = createReducer(
  estadoInicial,
  // [...state] -> Estraigo cada uno de los items y los regresalos de manera independiente.
  on( crear, (state, { texto }) => [...state, new Todo(texto)] ),

  on( toggle, (state, { id }) => {
      return state.map( todo => { // Lo pasamos por referencia no no debemos manipularelo por referencia por eso la desestrucrturación
        if( todo.id === id){
          return {
            /* todo.completado = !todo.completado;
            return todo; NO SE HACE ASI POR QUE NO HAY QUE MUTAR EL OBJETO */
            ...todo, // Desestructura el objeto y crea uno nuevo para no apuntar a la misma referencia de memoria
            completado: !todo.completado
          }
        } else {
          return todo;
        }
      } ); // Siempre hay que retornar el estado
    } ),

    on( editar, (state, { id, texto }) => {
      return state.map( todo => { // Lo pasamos por referencia no no debemos manipularelo por referencia por eso la desestrucrturación
        if( todo.id === id){
          return {
            /* todo.completado = !todo.completado;
            return todo; NO SE HACE ASI POR QUE NO HAY QUE MUTAR EL OBJETO */
            ...todo, // Desestructura el objeto y crea uno nuevo para no apuntar a la misma referencia de memoria
            /* texto: texto Es lo mismo lo de abajo*/
            texto
          }
        } else {
          return todo;
        }
      } ); // Siempre hay que retornar el estado
    } ),

    on( borrar, ( state, { id }) => {
      return state.filter( todo => todo.id !== id ); // El filter retorna todos los que cumplan la condición
    } ),

    on( toggleAll, (state, { completado }) => {
      return state.map( todo => { // Lo pasamos por referencia no no debemos manipularelo por referencia por eso la desestrucrturación

          return {
            /* todo.completado = !todo.completado;
            return todo; NO SE HACE ASI POR QUE NO HAY QUE MUTAR EL OBJETO */
            ...todo, // Desestructura el objeto y crea uno nuevo para no apuntar a la misma referencia de memoria
            completado: completado
          }

      } ); // Siempre hay que retornar el estado
    } ),

    on( limpiarTodos, (state) => {
      return state.filter( todo => !todo.completado  );
    })
);
