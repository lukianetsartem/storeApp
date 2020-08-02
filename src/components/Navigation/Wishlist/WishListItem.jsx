import React, {useState} from "react"
import '../../../scss/navigation/wishlist.scss'
import {NavLink} from "react-router-dom"
import CloseIcon from '@material-ui/icons/Close'
import {Price} from "../../common/Price"
import {ADD_TO_CART} from "../../../actions/shop"
import {useDispatch} from "react-redux"

export const WishListItem = (props) => {
    const dispatch = useDispatch()
    const product = props.product

    const addToCart = () => {
        dispatch({type: ADD_TO_CART, data: product.id})
    }

    const [removed, setRemoved] = useState(false)
    return (
        <div className={'wish-list-item'}>
            {(props.editMode && !removed) && <button className={'wish-list-remove-btn'} onClick={() => {
                props.addToEditList(product.id)
                setRemoved(true)
            }}>
                <CloseIcon className={'wish-list-remove-btn-icon'}/>
            </button>}
            <NavLink to={props.editMode ? '#' : `products/${product.productLink}`}>
                <img style={removed ? {opacity: 0.5, width: "90%"} : {opacity: 1}} alt="" src={product.modelPhoto}/>
            </NavLink>
            {!removed &&
            <div className={'wish-list-item-data'}>
                <p>{product.description.length > 50 ? product.description.slice(0, 50) + '..' : product.description}</p>
                <Price price={product.price} oldPrice={product.oldPrice}/>
            </div>}
            {removed && <button onClick={() => {
                props.removeFromEditList(product.id)
                setRemoved(false)
            }} className={'wish-list-undo-btn'}>undo</button>}
            {!props.editMode && <button onClick={() => addToCart()}>Add To Cart</button>}
        </div>
    )
}