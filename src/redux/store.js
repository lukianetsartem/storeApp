import thunk from "redux-thunk"
import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import {products} from "../reducers/products"
import {auth} from "../reducers/auth";

// Combining reducers
let rootReducer = combineReducers({
    products: products,
    auth: auth,
})

// Connecting Redux DEVTools to state
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Setting store
export const getStore = () => createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))