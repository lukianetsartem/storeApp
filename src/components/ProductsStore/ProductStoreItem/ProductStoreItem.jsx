import React, {useState} from "react"
import {NavLink} from "react-router-dom"
import '../../../scss/productsStore/productStoreItem.scss'
import FavoriteIcon from '@material-ui/icons/Favorite'
import {useDispatch, useSelector} from "react-redux"
import {ADD_TO_WISH_LIST, EDIT_WISH_LIST} from "../../../actions/shop"
import {Price} from "../../common/Price";

export const ProductStoreItem = ({product, wishList}) => {
    // Checking, is product wished?
    const index = wishList.findIndex(item => item.id.toString() === product._id)
    const [isFollowed, setIsFollowed] = useState(index >= 0 ? true : false)
    const isAuth = useSelector(state => state.user.isAuth)

    // Add product to wish list
    const dispatch = useDispatch()
    const addToWishListSubmit = (id) => {
        dispatch({type: ADD_TO_WISH_LIST, data: id})
        setIsFollowed(true)
    }
    // Remove product from wish list
    const removeFromWishList = (id) => {
        dispatch({type: EDIT_WISH_LIST, data: [id]})
        setIsFollowed(false)
    }

    return (
        <div className={'product-store-item'}>
            <NavLink to={`products/${product.productLink}`}>
                <div className={'product-store-item-image'}>
                    <img alt={''} className={'product-store-item-image-model'} src={product.productPhotos.modelPhoto}/>
                    <img alt={''} className={'product-store-item-image-interior'} src={product.productPhotos.interiorPhoto}/>
                </div>
                <p className={'product-store-item-title'}>{product.description.length > 50 ? product.description.slice(0, 50) + '..' : product.description}</p>
                <Price price={product.price} oldPrice={product.oldPrice}/>
            </NavLink>
            <div className={'add-to-wish-list'}>
                <FavoriteIcon className={'add-to-wish-list-icon'}
                              style={isFollowed && isAuth
                                  ? {color: 'rgb(238, 108, 106)'}
                                  : {color: '#a8a8a8'}}
                              onClick={() => {
                                  !isFollowed && isAuth && addToWishListSubmit(product._id)
                                  isFollowed && isAuth && removeFromWishList(product._id)
                              }}/>
            </div>
        </div>
    )
}