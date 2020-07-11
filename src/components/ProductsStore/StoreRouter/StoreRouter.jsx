import {ProductsStore} from "../ProductsStore";
import {Route} from "react-router-dom";
import React from "react";
import ProductPage from "../ProductPage/ProductPage";

export const StoreRouter = () => {
    return (
        <div>
            <Route path={'/sofa'} render={() => <ProductsStore productType={'Sofa'}/>}/>
            <Route path={'/chair'} render={() => <ProductsStore productType={'Chair'}/>}/>
            <Route path={'/bed'} render={() => <ProductsStore productType={'Bed'}/>}/>
            <Route path={'/storage'} render={() => <ProductsStore productType={'Storage'}/>}/>
            <Route path={'/accessories'} render={() => <ProductsStore productType={'Accessories'}/>}/>
            <Route path={'/garden'} render={() => <ProductsStore productType={'Garden'}/>}/>
            <Route path={'/table'} render={() => <ProductsStore productType={'Table'}/>}/>
            <Route path={'/lightning'} render={() => <ProductsStore productType={'Lighting'}/>}/>
            <Route path={'/products/:product'} render={() => <ProductPage/>}/>
        </div>
    )
}