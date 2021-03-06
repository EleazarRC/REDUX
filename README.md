# REDUX

## Ideas principales
- Toda la data de la aplicación se encuentra en una estructura previamente DEFINIDA.
- Toda la información se encontrará almacenada en un único lugar llamado STORE.
- El store JAMÁS se modifica de forma directa.
- Interacciones de usuario y/o código dispara acciones que describen qué sucedió.
- El valor actual de la información de la aplicación se llama estado - STATE
- Un nuevo estado es creado, en base a la combinación del viejo estado y la única acción por una función llamada REDUCER.

Es decir la acción y el viejo estado pasan por la función reducer() y crean un nuevo estado.

- Actinon
    -   Es la única fuente de información que se envía por interacciones de usuario o programa. (Se busca que sean lo más simples posibles.)
        - Type: COMPLETAR_TARE
        - Playload: Menor cantidad posible para realizar dicha tarea.
- Reducer
    - Función que recibe 2
        - oldState: EL estado actual de la aplicación.
        - action: Es un objeto plano que indica qué hay que hacer.
- State
    - REGLAS:
        - Solo lectura.
        - Nunca se mutará el state de forma directa.
        - Hay funciones prohibidas como:
            - Push
            - manipulación directa del objeto oldState.
- Store
    -Es un objeto con las siguientes responsabilidades.
        - Contiene el estado de la aplicación.
        - Permite la lectura del estado via getState()
        - Permite crear un nuevo estado utilizando: dispatch(ACTION)
        - Permite notificar cambios de estado via subscribe()

# Documentación oficial
https://redux.js.org/

https://es.redux.js.org/



https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related

ts-node app-1