import { createStore, combineReducers } from "redux";
import reducerCase from "./reducer";

const rootReducer = combineReducers({
    reducerCase
});

const store = createStore(rootReducer);
console.log("storee--",store)

export default store;