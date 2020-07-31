import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setProducts, setWishList} from "../../reducers/shop"
import {CategoryPath} from "./CategoryPath/CategoryPath"
import '../../scss/productsStore/productsStore.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {ProductStoreItem} from "./ProductStoreItem/ProductStoreItem"
import {Preloader} from "../common/Preloader"

export const ProductsStore = (props) => {
    const dispatch = useDispatch()
    // Product category
    const categoryPath = props.productType.toLowerCase()

    useEffect(() => {
        dispatch(setWishList())
        dispatch(setProducts(props.productType))

    }, [props.productType, dispatch])

    const productsData = useSelector(state => state.shop.products
        .filter(p => p.productType === props.productType))
    const [products, sortProducts] = useState(productsData)
    const wishList = useSelector(state => state.shop.wishList)
    // If props isn't loaded, return preloader
    if (!products[0]) return <Preloader/>

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
                <CategoryPath categoryPath={categoryPath}/>
                <p className={'products-header-title'}>{props.productType}</p>
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
                {products.map(p => <ProductStoreItem productLink={p.productLink}
                                                     wishList={wishList}
                                                     price={p.price}
                                                     description={p.description}
                                                     modelPhoto={p.productPhotos.modelPhoto}
                                                     interiorPhoto={p.productPhotos.interiorPhoto}
                                                     productType={p.productType}
                                                     oldPrice={p.oldPrice}
                                                     wished={p.wished}
                                                     id={p._id}
                                                     key={p._id}/>)}
            </div>
        </div>
    )
}


