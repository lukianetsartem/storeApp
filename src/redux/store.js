import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import {productsReducer} from "../reducers/productsReducer"
import thunk from "redux-thunk"

// Combining reducers
let rootReducer = combineReducers({
    products: productsReducer,
})

// Connecting Redux DEVTools to state
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Setting store
export const getStore = () => createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))