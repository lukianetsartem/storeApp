import React, {useState} from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import Looks5Icon from '@material-ui/icons/Looks5'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'

export const ShippingInfo = () => {
    const data = [
        {
            title: 'Dispatch',
            icon: <AccessTimeIcon className={'shipping-info-icon'}/>,
            info: 'Dispatched in 3-4 weeks',
            dropdownTitle: 'Dispatch Info',
            dropdownText: 'Dispatch is when we ship the item to our delivery partners who handle final delivery Delivery should be within 5 working days of dispatch for mainland UK (up to 14 days for Offshore, Highlands, Islands and Ireland)',
        },
        {
            title: '5 years guarantee',
            icon: <Looks5Icon className={'shipping-info-icon'}/>,
            info: 'Your piece is covered for 5 years',
            dropdownTitle: '5 Year Warranty',
            dropdownText: 'Our 5-years frame guarantee is valid for domestic use only, and covers loose joints, timber breakage and spring rail breakage. It does not include issues resulting from normal wear and tear, improper care, or accidental damage. This does not affect your statutory legal rights.',
        },
        {
            title: 'Delivery',
            icon: <LocalShippingIcon className={'shipping-info-icon'}/>,
            info: 'Home delivery £39',
            dropdownTitle: 'Standard Delivery Service',
            dropdownText: 'Two-man delivery service to room of choice (up to the 3rd floor if no lift), including unboxing and removal of packaging material(if requested)\n' +
                'The carrier will contact you within 2 working days after dispatch to arrange a convenient delivery date\n' +
                'The day before your scheduled delivery, you will receive a 3 hour time slot\n' +
                'Optional Assembly and Removal service available in certain POSTCODES\n' +
                'Additional fees apply for delivery to the Republic of Ireland SEE OUR DELIVERY POLICY',
        },
        {
            title: 'Returns',
            icon: <ReplayIcon className={'shipping-info-icon'}/>,
            info: 'No-hassle returns',
            dropdownTitle: 'Returns Info',
            dropdownText: 'No-hassle returns accepted within 14 days of delivery\n' +
                'Over this period we don’t want you to worry so we have extended our returns period from 14 days to 30 days to give you plenty of time to book in a return with usWe do not accept returns for Custom MADE products\n' +
                'However, you have up until 14 days after placing your order to cancel if you do change your mind',
        },
    ]

    return (
        <div className={'shipping-info'}>
            <div className={'shipping-info-content'}>
                {data.map(d => <ShippingInfoItem data={d} key={d.title}/>)}
            </div>
        </div>
    )
}

const ShippingInfoItem = (props) => {
    const [infoMode, setInfoMode] = useState(false)
    const data = props.data

    return (
        <div className={'shipping-info-item'}>
            <div className={'shipping-info-item-title'}>
                {data.icon}
                <p>{data.title}</p>
            </div>
            <p className={'shipping-info-item-description'}>{data.info}</p>
            <div onClick={() => setInfoMode(true) } className='shipping-info-learn-more'>More Info</div>
            {infoMode === true
            && <div className={'shipping-info-dropdown'}>
                <div className={'shipping-info-dropdown-content'}>
                    <CloseIcon onClick={() => setInfoMode(false)} className={'shipping-info-dropdown-close'}/>
                    <p className={'shipping-info-dropdown-title'}>{data.dropdownTitle}</p>
                    <p className={'shipping-info-dropdown-text'}>{data.dropdownText}</p>
                </div>
            </div>}
        </div>
    )
}