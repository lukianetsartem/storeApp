import React from 'react'
import {SubscribeForm} from "../Forms/SubscribeForm/SubscribeForm";
import '../../scss/footer/footer.scss'
import {NavLink} from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <SubscribeForm/>
            <div className={'footer'}>
                <div className={'footer-content'}>
                    <div className={'footer-navigation'}>
                        <p className={'footer-navigation-title'}>About us</p>
                        <nav>
                            <NavLink to={'/our-company'}>Our company</NavLink>
                            <NavLink to={'/help'}>Help & FAQs</NavLink>
                            <NavLink to={'/customer-reviews'}>Deliveries</NavLink>
                            <NavLink to={'/our-company'}>Return & Refunds</NavLink>
                        </nav>
                    </div>
                    <div className={'footer-navigation'}>
                        <p className={'footer-navigation-title'}>Shop furniture</p>
                        <nav>
                            <NavLink to={'/sofa'}>Sofas</NavLink>
                            <NavLink to={'/chair'}>Chairs</NavLink>
                            <NavLink to={'/bed'}>Beds</NavLink>
                            <NavLink to={'/table'}>Tables</NavLink>
                        </nav>
                    </div>
                    <div className={'footer-navigation'}>
                        <p className={'footer-navigation-title'}>Shop accessories</p>
                        <nav>
                            <NavLink to={'/accessories'}>Accessories</NavLink>
                            <NavLink to={'/lightning'}>Lightning</NavLink>
                            <NavLink to={'/garden'}>Garden</NavLink>
                            <NavLink to={'/storage'}>Storage</NavLink>
                        </nav>
                    </div>
                </div>
                <div className={'footer-contacts'}>
                    <nav>
                        <NavLink to={'terms-and-conditions'}>Terms and conditions</NavLink>
                        <NavLink to={'cookies-and-privacy-policy'}>Cookies and privacy policy</NavLink>
                    </nav>
                    <div className={'footer-phone-number'}>
                        <p>Registered number:</p>
                        <a href={"tel: +1-303-314-1122"}>+1 (303) 314 1122</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}