import React, {useEffect} from 'react'
import {setWishList} from "../../../reducers/shop"
import {useDispatch, useSelector} from "react-redux"

export const Wishlist = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setWishList())
    }, [dispatch])

    const wishList = useSelector(state => state.shop.wishList)

    console.log(wishList)
    return (
        <div>

        </div>
    )
}