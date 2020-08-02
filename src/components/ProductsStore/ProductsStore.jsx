import '../../scss/productsStore/productsStore.scss'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {CategoryPath} from "./CategoryPath/CategoryPath"
import {ProductStoreItem} from "./ProductStoreItem/ProductStoreItem"
import {Preloader} from "../common/Preloader"
import {LOAD_PRODUCTS, LOAD_WISH_LIST} from "../../actions/shop"

export const ProductsStore = ({productType}) => {
    const dispatch = useDispatch()
    // Product category

    useEffect(() => {
        dispatch({type: LOAD_WISH_LIST})
        dispatch({type: LOAD_PRODUCTS})

    }, [productType, dispatch])

    const productsData = useSelector(state => state.shop.products
        .filter(p => p.productType === productType))
    const [products, sortProducts] = useState(productsData)
    const wishList = useSelector(state => state.shop.wishList)
    const productsLoaded = useSelector(state => state.shop.productsLoaded)
    // If props isn't loaded, return preloader
    if (!productsLoaded) return <Preloader/>

    // Products filter
    const productSorter = (e) => {
        if (e.currentTarget.value === "PRICE_LOW_TO_HIGH") {
            sortProducts(products // Creating new array to keep immutable
                .slice() // Sorting products by price from bigger to smaller
                .sort((a, b) => a.price > b.price ? 1 : -1))
        } else if (e.currentTarget.value === "PRICE_HIGH_TO_LOW") { // That's filter working such as "PRICE_LOF_TO_HIGH", but him working from smaller to bigger
            sortProducts(products
                .slice()
                .sort((a, b) => a.price > b.price ? -1 : 1))
        } else if (e.currentTarget.value === "NAME_A_Z") { // That's filter working such as "PRICE_LOF_TO_HIGH", but him filtering products by alphabet order
            sortProducts(products
                .slice()
                .sort((a, b) => a.description > b.description ? 1 : -1))
        } else if (e.currentTarget.value === "NAME_Z_A") { // That's filter working such as "NAME_A_Z", but him filtering versus alphabet order
            sortProducts(products
                .slice()
                .sort((a, b) => a.description > b.description ? -1 : 1))
        }
    }

    return (
        <div className={'products'}>
            <div className={'products-header'}>
                <CategoryPath categoryPath={productType.toLowerCase()}/>
                <p className={'products-header-title'}>{productType}</p>
            </div>
            <div className={'products-sorter'}>
                <div className={'products-select'}>
                    <select onChange={productSorter}>
                        <option defaultValue={'SORT_BY'}>Sort by</option>
                        <option value={'PRICE_LOW_TO_HIGH'}>Price: low to high</option>
                        <option value={'PRICE_HIGH_TO_LOW'}>Price: high to low</option>
                        <option value={'NAME_A_Z'}>Name: A-Z</option>
                        <option value={'NAME_Z_A'}>Name: Z-A</option>
                    </select>
                    <ExpandMoreIcon className={'products-select-icon'}/>
                </div>
                {products.length > 1 ? <p>{products.length} products</p> : <p>{products.length} product</p>}
            </div>
            <div className={'products-section'}>
                {products.map(p => <ProductStoreItem product={p}
                                                     wishList={wishList}
                                                     key={p._id}/>)}
            </div>
        </div>
    )
}


