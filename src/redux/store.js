import {applyMiddleware, combineReducers, compose, createStore} from "redux";

let rootReducer = combineReducers({

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const getStore = () => createStore(rootReducer, composeEnhancers(applyMiddleware))