import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {editWishList, setWishList} from "../../../reducers/shop"
import {Preloader} from "../../common/Preloader"
import {WishListItem} from "./WishListItem"
import {WishListInspiration} from "./WishListInspiration"

export const Wishlist = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setWishList())
    }, [dispatch])

    const isAuth = useSelector(state => state.user.isAuth)
    const wishList = useSelector(state => state.shop.wishList)
    const wishListLoaded = useSelector(state => state.shop.wishListLoaded)

    const [editMode, setEditMode] = useState(false)
    const [editList, setEditList] = useState([])
    const addToEditList = (id) => {
        setEditList([...editList, id])
    }
    const removeFromEditList = (id) => {
        setEditList([...editList.filter(itemId => itemId !== id)])
    }
    const editWishListSubmit = (data) => {
        data.length > 0 ? dispatch(editWishList(data)) : console.log(data.length)
    }

    if (!wishListLoaded) return <Preloader/>
    return (
        <div className={'wish-list-page'}>
            <p className={'wish-list-page-title'}>Wishlist</p>
            {isAuth && <div className={'wish-list-navigation'}>
                <p>{wishList.length}{wishList.length === 1 ? " product" : " products"}</p>
                {!editMode ? <button className={'wish-list-edit-btn'} onClick={() => setEditMode(true)}>Edit</button>
                    : <button className={'wish-list-done-btn'} onClick={() => {
                        editWishListSubmit(editList)
                        setEditMode(false)
                    }}>Done</button>}
            </div>}
            {!isAuth
                ? <div className={'wish-list-auth-banner'}>

                </div>
                : <div className={'wish-list-content'}
                       style={wishList.length === 3 ? {justifyContent: "space-between"} : undefined}>
                    {wishList.map(product => <WishListItem key={product.description}
                                                           editMode={editMode}
                                                           removeFromEditList={removeFromEditList}
                                                           addToEditList={addToEditList}
                                                           product={product}/>)}
                </div>}
            <WishListInspiration/>
        </div>
    )
}


