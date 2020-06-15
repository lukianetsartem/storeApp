import React from 'react'
import '../../../scss/home/instagramBanner.scss'
import InstagramIcon from '@material-ui/icons/Instagram';

export const InstagramBanner = () => {
    return(
        <div className={'instagram-banner'}>
            <img src={'https://photorankmedia-a.akamaihd.net/media/d/y/t/dyt6sq4/normal.jpg'}/>
            <div className={'instagram-banner-content'}>
                <p className={'instagram-banner-title'}>Shop Instagram</p>
                <p className={'instagram-banner-description'}>Share your home #goals using #MADEdesign and mention @madedotcom for the chance to be featured on our site</p>
                <a target="_blank" href={'https://instagram.com/'}>View Gallery</a>
                <div className={'instagram-banner-icon'}>
                    <InstagramIcon/>
                </div>
            </div>
            <img src={'https://z2photorankmedia-a.akamaihd.net/media/o/s/8/os83vs4/normal.jpg'} />
        </div>
    )
}