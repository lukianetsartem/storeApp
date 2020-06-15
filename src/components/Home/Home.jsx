import React, {useEffect} from 'react'
import '../../scss/home/home.scss'
import {HomeSlider} from "./HomeSlider/HomeSlider";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../../reducers/productsReducer";
import {ProductSlider} from "./ProductSlider/ProductSlider";
import {CommercialAdd} from "./CommercialAdd/CommercialAdd";
import {InspirationBanner} from "./InspirationBanner/InspirationBanner";
import {InstagramBanner} from "./InstagramBanner/InstagramBanner";
import {ShopNavigation} from "./ShopNavigation/ShopNavigation";
import {HomeAboutUs} from "./HomeAboutUs/HomeAboutUs";

export const Home = () => {
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    const commercialAddData = {
        firstAdd: {
            firstBanner: {
                title: 'Buy sofas',
                picture: 'https://z1photorankmedia-a.akamaihd.net/media/4/r/8/4r83vs4/original.jpg',
                link: '/sofas'
            },
            secondBanner: {
                title: 'Buy beds',
                picture: 'https://z1photorankmedia-a.akamaihd.net/media/c/s/z/cszr2t4/original.jpg',
                link: '/beds',
            }
        },
        secondAdd: {
            firstBanner: {
                title: 'Buy tables',
                picture: 'https://photorankmedia-a.akamaihd.net/media/d/2/j/d2jinq4/original.jpg',
                link: '/tables'
            },
            secondBanner: {
                title: 'Buy chairs',
                picture: 'https://photorankmedia-a.akamaihd.net/media/a/2/p/a2p8yi4/original.jpg',
                link: '/chairs',
            }
        }
    }

    useEffect(() => {
        dispatch(setProducts())
    }, [])

    return (
        <div>
            <HomeSlider/>
            <ProductSlider products={products} title={'Comfortable sofas'} productType={'Sofa'}/>
            <CommercialAdd firstBanner={commercialAddData.firstAdd.firstBanner}
                           secondBanner={commercialAddData.firstAdd.secondBanner}/>
            <ProductSlider products={products} title={'Insanely soft beds'} productType={'Bed'} />
            <InspirationBanner/>
            <CommercialAdd firstBanner={commercialAddData.secondAdd.firstBanner}
                           secondBanner={commercialAddData.secondAdd.secondBanner}/>
            <ProductSlider products={products} title={'Nice chairs'} productType={'Chair'}/>
            <InstagramBanner/>
            <ShopNavigation/>
            <HomeAboutUs/>
        </div>
    )
}