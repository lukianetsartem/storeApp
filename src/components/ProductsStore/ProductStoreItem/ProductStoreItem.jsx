import React, {useEffect, useState} from "react"
import {NavLink} from "react-router-dom"
import '../../../scss/productsStore/productStoreItem.scss'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useDispatch, useSelector} from "react-redux";
import {setWishList} from "../../../reducers/products";

export const ProductStoreItem = (props) => {
    // Product url
    const productUrl = `products/${props.description 
        .replace(',', ' ')
        .replace('& ', '')
        .replace('  ', ' ')
        .split(' ')
        .join('-')}`
        .toLowerCase()

    const [isFollowed, setIsFollowed] = useState(false) // Product following state
    const dispatch = useDispatch()
    const wishList = useSelector(state => state.products.wishList)

    const setWishListData = (wishListData) => {
        debugger
        dispatch(setWishList(wishListData))
    }

    useEffect(() => {
        debugger
        setWishListData()
    }, [])

    console.log(wishList)
    console.log(props)
    debugger
    return (
        <div className={'product-store-item'}>
            <NavLink to={productUrl}>
                <div className={'product-store-item-image'}>
                    <img className={'product-store-item-image-model'} src={`${props.modelPhoto}`}/>
                    <img className={'product-store-item-image-interior'} src={`${props.interiorPhoto}`}/>
                </div>
                <p className={'product-store-item-title'}>{props.description.length > 50 ? props.description.slice(0,50) + '..' : props.description }</p>
                {!props.oldPrice && <p className={'product-store-item-price'}>£{props.price}</p>}
                {props.oldPrice && <div className={'sale-price-product'}>
                    <p className={'product-store-item-sale-price'}>£{props.oldPrice}</p>
                    <p className={'product-store-item-disabled-price'}>£{props.oldPrice}</p>
                </div>}
            </NavLink>
            <div className={'add-to-wish-list'}>
                <FavoriteIcon className={'add-to-wish-list-icon'}
                              style={isFollowed === true
                                  ? {color: 'rgb(238, 108, 106)'}
                                  : {color: '#a8a8a8'}}
                              onClick={() => {
                                  isFollowed === false
                                      ? setIsFollowed(true)
                                      : setIsFollowed(false)
                                  debugger
                                  setWishListData(props)
                              }}/>
            </div>
        </div>
    )
}