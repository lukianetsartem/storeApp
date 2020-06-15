import React, {useEffect} from 'react'
import '../../scss/home/home.scss'
import {HomeSlider} from "./HomeSlider/HomeSlider";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../../reducers/productsReducer";
import {ProductSlider} from "./ProductSlider/ProductSlider";

export const Home = () => {
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProducts())
    }, [])

    return (
        <div>
            <HomeSlider/>
            <ProductSlider products={products}/>
        </div>
    )
}
