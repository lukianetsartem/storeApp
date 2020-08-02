import React, {useEffect, useState} from "react"
import '../../../../scss/navigation/style.scss'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import {useDispatch, useSelector} from "react-redux"
import {StyleItem} from "./StyleItem"
import {Redirect} from "react-router-dom"
import {Preloader} from "../../../common/Preloader"
import {LOAD_GET_STYLE, LOAD_SET_STYLE} from "../../../../actions/style"

export const Style = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: LOAD_GET_STYLE})
    }, [dispatch])

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
        dispatch({type: LOAD_SET_STYLE, data: selectedPhotos})
        setVisibility(false)
        setAnalysed(true)
    }

    // Getting data from the state
    const userStyle = useSelector(state => state.style.userStyle)
    const analysePhotos = useSelector(state => state.style.analysePhotos)
    const isDataLoaded = useSelector(state => state.style.isDataLoaded)

    // Checking is data loaded
    if(!isDataLoaded) return <Preloader/>
    // If analyse finished, redirecting to result page
    if(analysed || userStyle.firstCategory.name) return <Redirect to={"/customer/your-style"}/>
    return (
        <div className={'style-page'}>
            <div className={'style-page-header'}>
                <div className={'style-page-header-promo'}>
                    <div className={'style-page-header-promo-content'}>
                        <div>
                            <img alt={''} src={'https://res-1.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,q_auto:best,w_1440/v4/wysiwyg/find-your-style/fys-icon01.jpg'}/>
                            <p>LIKE 7 PICTURES</p>
                            <span>Show us what you like using our style gallery.</span>
                        </div>
                        <div>


                            <img alt={''} src={'https://res-1.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,q_auto:best,w_1440/v4/wysiwyg/find-your-style/fys-icon02.jpg'}/>
                            <p>YOUR STYLE</p>
                            <span>Find out more about your 2 dominant styles.</span>
                        </div>
                        <div>
                            <img alt={''} src={'https://res-1.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,q_auto:best,w_1440/v4/wysiwyg/find-your-style/fys-icon03.jpg'}/>
                            <p>YOUR PRODUCTS</p>
                            <span>Discover products that match your taste.</span>
                        </div>
                    </div>
                </div>
            </div>
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
                {analysePhotos.map(p => <StyleItem url={p.photo}
                                            category={p.category}
                                            addToAnalyse={addToAnalyse}
                                            key={p.photo}/>)}
            </div>
        </div>
    )
}