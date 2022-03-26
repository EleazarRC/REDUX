// Acciones
export interface Action {
    type: string;
    payload?: any; // Parámetros que le podemos mandar a la acción.
}

export interface Reducer<T>{
    ( state: T, action: Action ): T
}