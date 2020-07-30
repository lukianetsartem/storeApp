import React, {useState} from "react"
import '../../../scss/navigation/account/wishlist.scss'
import {NavLink} from "react-router-dom"
import CloseIcon from '@material-ui/icons/Close'

export const WishListItem = (props) => {
    const product = props.product
    const productUrl = `products/${product.description
        .replace(',', ' ')
        .replace('& ', '')
        .replace('  ', ' ')
        .split(' ')
        .join('-')}`
        .toLowerCase()

    const [removed, setRemoved] = useState(false)

    return (
        <div className={'wish-list-item'}>
            {(props.editMode && !removed) && <button className={'wish-list-remove-btn'} onClick={() => {
                props.addToEditList(product.id)
                setRemoved(true)
            }}>
                <CloseIcon className={'wish-list-remove-btn-icon'}/>
            </button>}
            <NavLink to={props.editMode ? '#' : productUrl}>
                <img style={removed ? {opacity: 0.5, width: "90%"} : {opacity: 1}} alt="" src={product.modelPhoto}/>
            </NavLink>
            {!removed &&
            <div className={'wish-list-item-data'}>
                <p>{product.description}</p>
                {!product.oldPrice && <p className={'product-store-item-price'}>£{product.price}</p>}
                {product.oldPrice && <div className={'sale-price-product'}>
                    <p className={'product-store-item-sale-price'}>£{product.price}</p>
                    <p className={'product-store-item-disabled-price'}>£{product.oldPrice}</p>
                </div>}
            </div>}
            {removed && <button onClick={() => {
                props.removeFromEditList(product.id)
                setRemoved(false)
            }} className={'wish-list-undo-btn'}>undo</button>}
            {!props.editMode && <button>Add To Basket</button>}
        </div>
    )
}