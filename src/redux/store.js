import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {productsReducer} from "../reducers/productsReducer";

let rootReducer = combineReducers({
    products: productsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const getStore = () => createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))