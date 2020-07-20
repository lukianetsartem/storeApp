import React from 'react'
import './App.scss'
import {Header} from "./components/Header/Header"
import {Home} from "./components/Home/Home"
import {Redirect, Route} from "react-router-dom"
import {Footer} from "./components/Footer/Footer"
import {StoreRouter} from "./components/ProductsStore/StoreRouter/StoreRouter"
import {NavigationRouter} from "./components/Navigation/NavigationRouter"

export const App = () => {
    return (
        <div>
            <Header/>
            <Route path='/home' render={() => <Home/>}/>
            <Route exact path={'/'}><Redirect to={'/home'}/></Route>
            <NavigationRouter/>
            <StoreRouter/>
            <Footer/>
        </div>
    )
}