import React, {useEffect} from 'react'
import '../../scss/product/product.scss'
import {NavLink, withRouter} from "react-router-dom";
import {setProductData} from "../../reducers/productsReducer";
import {useDispatch, useSelector} from "react-redux";
import {CategoryPath} from "../ProductsStore/CategoryPath/CategoryPath";
import {Preloader} from "../common/Preloader/Preloader";
import {ProductSlider} from "./ProductSlider/ProductSlider";
import {ShippingInfo} from "./ShippingInfo/ShippingInfo";
import {ProductHeading} from "./ProductHeading/ProductHeading";
import {ProductGallery} from "./ProductGallery/ProductGallery";
import {ProductDescription} from "./ProductDescription/ProductDescription";
import {HouseProudSlider} from "./HouseProudSlider/HouseProudSlider";

const ProductPage = (props) => {
    const dispatch = useDispatch()
    // Getting products from data base
    const product = useSelector(state => state.products.product)
    // Getting product name
    let productName = props.match.params.product

    useEffect(() => {
        // Request date of product by him name
        dispatch(setProductData(productName))
    }, [props.match.params])

    // Check, whether props are loaded?
    const isLoaded = useSelector(state => state.products.isLoaded)
    // If pros aren't loaded, return preloader
    if (isLoaded === false) return <Preloader/>

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
                <img src={product.productPhotos.sizePhoto}/>
            </div>
            {product.productPhotos.houseProudPhotos.length >= 5 && <HouseProudSlider photos={product.productPhotos.houseProudPhotos}/>}
        </div>
    )
}

export default withRouter(ProductPage)