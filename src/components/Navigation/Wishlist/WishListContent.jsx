import {WishListItem} from "./WishListItem"
import {NavLink} from "react-router-dom"
import React from "react"

export const WishListContent = (props) => {
    return (
        <div className={'wish-list-content'}
             style={props.wishList.length === 3 ? {justifyContent: "space-between"} : undefined}>
            {props.wishList.length > 0 ? props.wishList.map(product => <WishListItem key={product.description}
                                                                                     editMode={props.editMode}
                                                                                     removeFromEditList={props.removeFromEditList}
                                                                                     addToEditList={props.addToEditList}
                                                                                     product={product}/>)
                : <div className={'wish-list-empty'}>
                    <p className={'wish-list-empty-title'}>Your wishlist is empty</p>
                    <p className={'wish-list-empty-subtitle'}>We've got some ideas in our <NavLink to={'/home'}>shop</NavLink></p>
                </div>}
        </div>
    )
}