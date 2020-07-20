import React, {useState} from "react"
import '../../../../scss/navigation/account/style.scss'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import {StyleItem} from "./StyleItem"
import {Redirect} from "react-router-dom"

export const Style = () => {
    let photos = [
        {
            photo: 'https://images.prismic.io/made/a2697b4b1a211c857d7c490f4ca8da3ea65dcae0_36294.jpg?auto=compress,format',
            category: 'industrial'
        },
        {
            photo: 'https://images.prismic.io/made/4c324a7898937c633f17e44da8b3d3a2fee3832b_madecommaster_2019-01-09_3112583546.jpeg?auto=compress,format',
            category: 'industrial'
        },
        {
            photo: 'https://images.prismic.io/made/b4c0d0b468ac3a4ba597f11c5901bb06fe1090cc_f91f221d97893adba7aa7bf1d0045237589aec60__mg_9396.jpg?auto=compress,format',
            category: 'industrial'
        },
        {
            photo: 'https://images.prismic.io/made/8292f1ae6ffbc8455e334b0b73b8ab37b33da42f_madecommaster_2019-01-09_3112567690.jpeg?auto=compress,format',
            category: 'industrial'
        },
        {
            photo: 'https://images.prismic.io/made/0a60055bc96462de4736db474fea3e228041b3f5_32483.jpg?auto=compress,format',
            category: 'industrial'
        },
        {
            photo: 'https://images.prismic.io/made/d171665d38ed6794e72ead09cb8133807768267c_35192.jpg?auto=compress,format',
            category: 'modern'
        },
        {
            photo: 'https://images.prismic.io/made/9be2dd1488686370ee9ede46c943d9f34d14b73d_34655.jpg?auto=compress,format',
            category: 'modern'
        },
        {
            photo: 'https://images.prismic.io/made/508e3fb1c8fb5962d3f4b0554b7d695570eb78e0_1906.jpg?auto=compress,format',
            category: 'modern'
        },
        {
            photo: 'https://images.prismic.io/made/7e1a31388448d8531139d6070bf904dc5424b24e_eccb469fd25d7fcc2fd79c2f872493325c002a19_catesthill_hometour_finals0f9a5239.jpg?auto=compress,format',
            category: 'modern'
        },
        {
            photo: 'https://images.prismic.io/made/8c36429a025b3de273bb5ac59b9fefe17322d685_01-retro-living.jpg?auto=compress,format',
            category: 'modern'
        },

        {
            photo: 'https://images.prismic.io/made/035bb21c03be8abd5d9c9abe14bfc78a79ff1f92_merve.ayhan245_2019-02-25_3148354420.jpg?auto=compress,format',
            category: 'traditional'
        },
        {
            photo: 'https://images.prismic.io/made/fa0dc1dcfd02cb16c0c90392f13779c393f7d9ad_bodieandfou_2019-03-03_3152807236.jpg?auto=compress,format',
            category: 'traditional'
        },
        {
            photo: 'https://images.prismic.io/made/ec45e6900e95cb3e026e2f32f2280126b085b277_31d33831b08f9f0faeab8afc415365949fef38b6_anders_170520_459_ma.jpg?auto=compress,format',
            category: 'traditional'
        },
        {
            photo: 'https://images.prismic.io/made/9723055cee9a476a995f6d2c8ce9b370589b2f3d_hej.mia_2018-10-12_3049341554.jpg?auto=compress,format',
            category: 'traditional'
        },
        {
            photo: 'https://images.prismic.io/made/17cf06190bd712c28d5e7c58d4ed89fc9f408ab4_32255.jpg?auto=compress,format',
            category: 'traditional'
        },
        {
            photo: 'https://images.prismic.io/made/81bd6ab7b953551bc9cca95fd8b37f52829beb08_926.jpg?auto=compress,format',
            category: 'retro',
        },
        {
            photo: 'https://images.prismic.io/made/3c791c11845e78946d945ab837e5b9868023577c_b914484a35dc8f626935149c182bd7395463dd5a_portrait16.jpg?auto=compress,format',
            category: 'retro',
        },
        {
            photo: 'https://images.prismic.io/made/f222eb18c6c260aac838ed7260521cc2e6a5666c_044e8daa52bfe46b58e97be519d025608cd427ea_17.jpg?auto=compress,format',
            category: 'retro',
        }
    ]

    // Selecting photos to analyse (statement)
    const [selectedPhotos, setPhotos] = useState([])
    // Allow analyse filed visibility
    const [visibility, setVisibility] = useState(false)
    // Is analyse completed (statement)
    const [analysed, setAnalysed] = useState(false)
    // Length of array selected photos
    const length = selectedPhotos.length
    // Max size of array selected photos
    const maxSize = 7
    const addToAnalyse = (category) => {
        // While max size reached, add new photos to array
        selectedPhotos.length < maxSize && setPhotos([...selectedPhotos, category])
        // If the maximum size of the photo is reached, proceed to analysis
        length === maxSize - 1 && setVisibility(true)
    }

    const analyseStyle = () => {
        setVisibility(false)
        setAnalysed(true)
    }

    // If analyse finished, redirecting to result page
    console.log(analysed)
    if(analysed) return <Redirect to={"/customer/your-style"}/>
    return (
        <div className={'style-page'}>
            {visibility && <div className={'style-page-analyse-banner'}>
                <div className={'style-page-analyse-banner-content'}>
                    <div>
                        <p>Ready for the results</p>
                        <div>
                            <ThumbUpAltIcon/>
                        </div>
                    </div>
                    <button onClick={() => analyseStyle()}>Analyse my style</button>
                </div>
            </div>}
            <div className={'style-page-progress-bar'}>
                <div className={'style-page-progress-bar-content'}>
                    <p>Like {maxSize} images, that feel like home</p>
                    <div className={'progress-bar-content'}>
                        <div className={'progress-bar-item'}>
                            <div className={'progress-line'} style={{width: `${100 / maxSize * length}%`}}/>
                        </div>
                        <p>{length} / {maxSize}</p>
                    </div>
                </div>
            </div>
            <div className={'style-page-content'}>
                {photos.map(p => <StyleItem url={p.photo}
                                            category={p.category}
                                            addToAnalyse={addToAnalyse}
                                            key={p.photo}/>)}
            </div>
        </div>
    )
}