import React, {useEffect} from 'react'
import '../../../scss/productsStore/product/product.scss'
import {NavLink, withRouter} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {ProductSlider} from "./ProductSlider/ProductSlider"
import {ShippingInfo} from "./ShippingInfo/ShippingInfo"
import {ProductHeading} from "./ProductHeading/ProductHeading"
import {ProductGallery} from "./ProductGallery/ProductGallery"
import {ProductDescription} from "./ProductDescription/ProductDescription"
import {HouseProudSlider} from "./HouseProudSlider/HouseProudSlider"
import {setProductData} from "../../../reducers/products"
import {Preloader} from "../../common/Preloader/Preloader"
import {CategoryPath} from "../CategoryPath/CategoryPath"

const ProductPage = (props) => {
    const dispatch = useDispatch()
    // Getting product name
    let productName = props.match.params.product

    useEffect(() => {
        // Request date of product by him name
        dispatch(setProductData(productName))
    }, [])

    // Getting products from data base
    const product = useSelector(state => state.products.product)

    // Check, whether props are loaded?
    const isProductDataLoaded = useSelector(state => state.products.isProductDataLoaded)

    // If pros aren't loaded, return preloader
    if (isProductDataLoaded === false) return <Preloader/>

    return (
        <div className={'product'}>
            <div className={'products-header'}>
                <CategoryPath categoryPath={product.productType} productId={productName}/>
                <p className={'products-header-title'}>{props.productType}</p>
            </div>
            <div className={'product-page-heading-container'}>
                <ProductSlider photos={product.productPhotos.additionalPhotos}/>
                <ProductHeading product={product}/>
            </div>
            <ShippingInfo/>
            <div className={'product-story'}>
                <p className={'product-story-title'}>{product.productStory.storyHeader}</p>
                <p className={'product-story-text'}>{product.productStory.storyText}</p>
                <NavLink to={`/${product.productType}`.toLowerCase()}>View all {product.productType}s</NavLink>
            </div>
            <ProductGallery product={product}/>
            <ProductDescription productParams={product.productParams} details={product.details}/>
            <div className={'product-size-photo'}>
                <img src={product.productPhotos.additionalPhotos[6]}/>
            </div>
            {product.productPhotos.houseProudPhotos.length >= 5 && <HouseProudSlider photos={product.productPhotos.houseProudPhotos}/>}
        </div>
    )
}

export default withRouter(ProductPage)