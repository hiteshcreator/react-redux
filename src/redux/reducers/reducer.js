import { ADD_TODO,DELETE_TODO } from "../constants";

const initialState = []

const  reducerCase = (state=initialState,action) => {
    switch(action.type){

        case ADD_TODO:
            return state
        
        case DELETE_TODO:
            return state

        default:
            return state

    }
}


export default reducerCase;