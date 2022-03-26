import { Action  } from "../ngrx-fake/ngrx"

export const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}
export const decrementadorAction: Action = {
    type: 'DECREMENTAR'
}
export const multiplicadorAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}
export const divididorAction: Action = {
    type: 'DIVIDIR',
    payload: 2
}
export const reseteadorAction: Action = {
    type: 'RESET'
}