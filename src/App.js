import React from 'react'
import './App.scss'
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";

export const App = () => {
    return (
        <div>
            <Header/>
            <Home/>
        </div>
    )
}
