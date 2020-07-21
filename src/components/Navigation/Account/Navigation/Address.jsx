import React, {useState} from 'react'
import '../../../../scss/navigation/account/address.scss'
import {AddressForm} from "../../../Forms/Auth/AddressForm"

export const Address = () => {
    const [visibility, setVisibility] = useState(false)

    return (
        <div className={'address-page'}>
            <div className={'account-page-title'}>
                <p>My address book</p>
                <span/>
            </div>
            <p className={'details-page-subtitle'}>Please note that changes to delivery addresses will not affect current orders.</p>
            <div>
                <p className={'details-page-subtitle'}>Want to add new address?</p>
                <button onClick={() => setVisibility(true) } className={'add-new-address'}>Add a new address</button>
            </div>
            {visibility && <AddressForm setVisibility={setVisibility}/>}
        </div>
    )
}