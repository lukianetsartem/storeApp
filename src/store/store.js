import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import createSagaMiddleware from 'redux-saga'
import {style} from "../reducers/style"
import {shop} from "../reducers/shop"
import {user} from "../reducers/user"
import {shopSaga} from "../sagas/shopSagas"
import {styleSaga} from "../sagas/styleSagas"
import {userSaga} from "../sagas/userSaga"

export const token = localStorage.getItem('token')
const sagaMiddleware = createSagaMiddleware()

// Combining reducers
let rootReducer = combineReducers({
    shop: shop,
    user: user,
    style: style,
})

// Connecting Redux DEVTools to state
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Setting store
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(shopSaga)
sagaMiddleware.run(styleSaga)
sagaMiddleware.run(userSaga)