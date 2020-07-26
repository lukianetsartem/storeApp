import React, {useEffect, useState} from "react"
import {NavLink} from "react-router-dom"
import '../../../scss/productsStore/productStoreItem.scss'
import FavoriteIcon from '@material-ui/icons/Favorite'
import {useDispatch, useSelector} from "react-redux"
import {wishListAdd, wishListRemove} from "../../../reducers/shop"

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

    const addToWishList = (id) => {
        setIsFollowed(true)
        // dispatch(wishListAdd(id))
    }
    const removeFromWishList = (id) => {
        setIsFollowed(false)
        // dispatch(wishListRemove(id))
    }

    return (
        <div className={'product-store-item'}>
            <NavLink to={productUrl}>
                <div className={'product-store-item-image'}>
                    <img alt={''} className={'product-store-item-image-model'} src={`${props.modelPhoto}`}/>
                    <img alt={''} className={'product-store-item-image-interior'} src={`${props.interiorPhoto}`}/>
                </div>
                <p className={'product-store-item-title'}>{props.description.length > 50 ? props.description.slice(0, 50) + '..' : props.description}</p>
                {!props.oldPrice && <p className={'product-store-item-price'}>£{props.price}</p>}
                {props.oldPrice && <div className={'sale-price-product'}>
                    <p className={'product-store-item-sale-price'}>£{props.price}</p>
                    <p className={'product-store-item-disabled-price'}>£{props.oldPrice}</p>
                </div>}
            </NavLink>
            <div className={'add-to-wish-list'}>
                <FavoriteIcon className={'add-to-wish-list-icon'}
                              style={isFollowed
                                  ? {color: 'rgb(238, 108, 106)'}
                                  : {color: '#a8a8a8'}}
                              onClick={() => {
                                  !isFollowed
                                      ? addToWishList(props.id)
                                      : removeFromWishList(props.id)
                              }}/>
            </div>
        </div>
    )
}