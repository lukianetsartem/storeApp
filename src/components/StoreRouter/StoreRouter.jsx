import {ProductsStore} from "../ProductsStore/ProductsStore";
import {Route} from "react-router-dom";
import React from "react";

export const StoreRouter = () => {
    return (
        <div>
            <Route path={'/sofas'} render={() => <ProductsStore productType={'Sofa'}/>}/>
            <Route path={'/chairs'} render={() => <ProductsStore productType={'Chair'}/>}/>
            <Route path={'/beds'} render={() => <ProductsStore productType={'Bed'}/>}/>
        </div>
    )
}