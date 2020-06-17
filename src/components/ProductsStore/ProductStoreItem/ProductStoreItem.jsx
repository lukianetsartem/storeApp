import React, {useState} from "react"
import {NavLink} from "react-router-dom"
import '../../../scss/productsStore/productStoreItem.scss'
import FavoriteIcon from '@material-ui/icons/Favorite';

export const ProductStoreItem = (props) => {
    const productUrl = `${props.productType}/${props.description
        .replace(',', ' ')
        .split(' ')
        .join('-')}`
        .toLowerCase()

    const [isFollowed, setIsFollowed] = useState(false)

    return (
        <div className={'product-store-item'}>
            <NavLink to={productUrl}>
                <div className={'product-store-item-image'}>
                    <img className={'product-store-item-image-model'} src={`${props.modelPhoto}`}/>
                    <img className={'product-store-item-image-interior'} src={`${props.interiorPhoto}`}/>
                </div>
                <p className={'product-store-item-title'}>{props.description}</p>
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
                              }}/>
            </div>
        </div>
    )
}