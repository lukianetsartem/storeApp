import React from 'react'
import './App.scss'
import {Header} from "./components/Header/Header"
import {Home} from "./components/Home/Home"
import {Redirect, Route} from "react-router-dom"
import {Footer} from "./components/Footer/Footer"
import {StoreRouter} from "./components/StoreRouter/StoreRouter";
import {PageNotFound} from "./components/PageNotFound/PageNotFound";

export const App = () => {
    return (
        <div>
            <Header/>
            <StoreRouter/>
            <Redirect from={'/'} to={'/home'}/>
            <Route path={'/home'}
                   render={() => <Home/>}/>
            <Redirect from='*' to='/404' />
            <Route path='/404'
                   render={() => <PageNotFound/>}/>
            <Footer/>
        </div>
    )
}
