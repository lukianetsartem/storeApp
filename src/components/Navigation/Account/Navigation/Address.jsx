import React, {useEffect, useState} from 'react'
import '../../../../scss/navigation/account/address.scss'
import {AddressForm} from "../../../Forms/Auth/AddressForm"
import {useDispatch, useSelector} from "react-redux"
import {SuccessBanner} from "../../../common/SuccessBanner"
import {LOAD_GET_ADDRESS, LOAD_SET_ADDRESS} from "../../../../actions/user"

export const Address = () => {
    const dispatch = useDispatch()

    const [addAddressVisibility, setAddVisibility] = useState(false)
    const [editAddressVisibility, setEditVisibility] = useState(false)

    useEffect(() => {
        dispatch({type: LOAD_GET_ADDRESS})
    }, [dispatch])

    const setAddress = (address) => {
        dispatch({type: LOAD_SET_ADDRESS, address: address})
        setAddVisibility(false)
        setEditVisibility(false)
    }

    const addressChanged = useSelector(state => state.user.addressChanged)
    const address = useSelector(state => state.user.userAddress)

    return (
        <div className={'address-page'}>
            {addressChanged && <SuccessBanner link={true} text={'Your address has been changed'}/>}
            <div className={'page-title'}>
                <p>My address book</p>
                <span/>
            </div>
            <p className={'details-page-subtitle'}>Please note that changes to delivery addresses will not affect
                current orders.</p>
            {!address.address ?
                <div>
                    <p className={'details-page-subtitle'}>You haven't any address, want to add new address?</p>
                    <button onClick={() => setAddVisibility(true)} className={'add-new-address'}>Add a new address</button>
                </div>
                : <div className={'address-page-address'}>
                    <div className={'address-page-subtitle'}>
                        <p>My address</p>
                        <span/>
                    </div>
                    <div className={'address-page-address-data'}>
                        <p>{address.firstName} {address.lastName}</p>
                        <p>{address.town}, {address.country}</p>
                        <p></p>
                        <p>{address.address}</p>
                        <p>{address.telephone}</p>
                        <p>{address.postcode}</p>
                    </div>
                    <button onClick={() => setEditVisibility(true)}>Edit</button>
                </div>}
            {addAddressVisibility && <AddressForm title={'Enter your new address'} setAddress={setAddress} setVisibility={setAddVisibility}/>}
            {editAddressVisibility && <AddressForm title={'Edit your address'} address={address} setAddress={setAddress} setVisibility={setEditVisibility}/>}
        </div>
    )
}