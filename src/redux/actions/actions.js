import { ADD_TODO, DELETE_TODO,APP_STATUS} from "../constants";


export const addTodo = (data) => ({
    type:ADD_TODO,
    payload:data
})

export const deleteTodo = (id) => ({
    type:DELETE_TODO,
    payload:id
})

export const appStatus = (data) => {
    return{
        type:APP_STATUS,
        payload:data
    }
}