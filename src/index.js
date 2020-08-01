    import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import {store} from "./store/store"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import {App} from "./App"

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('application')
)

serviceWorker.unregister()


