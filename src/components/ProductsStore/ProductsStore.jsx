import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setProducts} from "../../reducers/productsReducer"
import {CategoryPath} from "./CategoryPath/CategoryPath"
import '../../scss/productsStore/productsStore.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {ProductStoreItem} from "./ProductStoreItem/ProductStoreItem";

export const ProductsStore = (props) => {
    const dispatch = useDispatch()
    const categoryPath = props.productType.toLowerCase()

    useEffect(() => {
        dispatch(setProducts()) // Get products data from data base
    }, [])

    let [products, sortProducts] = useState(useSelector(state => state.products.products).filter(p => p.productType === props.productType)) // Products data for component

    // Products filter
    const productSorter = (e) => {
        if(e.currentTarget.value === "PRICE_LOW_TO_HIGH") {
            sortProducts(products
                .slice() // Creating new array for immutable
                .sort((a, b) => a.price > b.price ? 1 : -1)) // Sorting products by price from bigger to smaller
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
                {products.map(p => <ProductStoreItem price={p.price}
                                                     description={p.description}
                                                     modelPhoto={p.productPhotos.modelPhoto}
                                                     interiorPhoto={p.productPhotos.interiorPhoto}
                                                     productType={p.productType}
                                                     salePrice={p.salePrice}
                                                     key={p._id}/>)}
            </div>
        </div>
    )
}


