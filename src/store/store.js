import thunk from "redux-thunk"
import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import {shop} from "../reducers/shop"
import {user} from "../reducers/auth"

// Combining reducers
let rootReducer = combineReducers({
    products: shop,
    user: user,
})

// Connecting Redux DEVTools to state
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Setting store
export const getStore = () => createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))