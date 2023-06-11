import { ADD_TODO,DELETE_TODO,APP_STATUS} from "../constants";

const initialState = {
    addTodo:"",
    delTodo:"",
    status:false
}

const  reducerCase = (state=initialState,action) => {
    switch(action.type){

        case ADD_TODO:
            return{
                ...state,
                addTodo:action.data
            }
            break;

        case DELETE_TODO:
            return{
                ...state,
                delTodo:action.data
            }
            break;

        case APP_STATUS:
            return{
                ...state,
                status:action.data
            }
            break;

        default:
            return state

    }
}


export default reducerCase;