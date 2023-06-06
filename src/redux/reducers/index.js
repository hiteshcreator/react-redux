import { createStore, combineReducers } from "redux";
import reducerCase from "./reducer";

const rootReducer = combineReducers({
    reducerCase
});

const store = createStore(rootReducer);

export default store;