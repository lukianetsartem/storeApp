import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setProducts} from "../../reducers/productsReducer"
import {CategoryPath} from "./CategoryPath/CategoryPath"
import '../../scss/productsStore/productsStore.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {ProductStoreItem} from "./ProductStoreItem/ProductStoreItem";

export const ProductsStore = (props) => {
    const products = useSelector(state => state.products.products).filter(p => p.productType === props.productType)
    const dispatch = useDispatch()
    const categoryPath = props.productType.toLowerCase()

    useEffect(() => {
        dispatch(setProducts())
    }, [])

    return (
        <div className={'products'}>
            <div className={'products-header'}>
                <CategoryPath categoryPath={categoryPath}/>
                <p className={'products-header-title'}>{props.productType}s</p>
            </div>
            <div className={'products-sorter'}>
                <div className={'products-select'}>
                    <select>
                        <option defaultValue={'SORT_BY'}>Sort by</option>
                        <option value={'PRICE_LOW_TO_HIGH'}>Price: low to high</option>
                        <option value={'PRICE_HIGH_TO_LOW'}>Price: high to low</option>
                        <option value={'SALE'}>Sale</option>
                        <option value={'NAME_A_Z'}>Name: A-Z</option>
                        <option value={'NAME_Z_A'}>Name: Z-A</option>
                    </select>
                    <ExpandMoreIcon className={'products-select-icon'}/>
                </div>
                <p>{products.length} products</p>
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