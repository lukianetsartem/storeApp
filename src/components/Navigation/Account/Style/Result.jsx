import React, {useEffect, useState} from 'react'
import {ResultSlider} from "./ResultSlider"
import {useDispatch, useSelector} from "react-redux"
import {Preloader} from "../../../common/Preloader"
import {deleteStyle, getStyle} from "../../../../reducers/style"
import {Redirect} from "react-router-dom"

export const Result = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getStyle())
    }, [dispatch])

    // Getting data from the state
    const userStyle = useSelector(state => state.style.userStyle)
    const photos = useSelector(state => state.style.resultPhotos)
    const isDataLoaded = useSelector(state => state.style.isDataLoaded)
    const [redirect, setRedirect] = useState(false)

    const destroyStyle = () => {
        dispatch(deleteStyle())
        setRedirect(true)
    }

    // Checking if user data is loaded
    if (!isDataLoaded) return <Preloader/>
    if (!userStyle.firstCategory.name || redirect) return <Redirect to={'/customer/find-your-style'}/>

    // Circles settings
    const largeCirclePercent = userStyle.firstCategory.percent
    const littleCirclePercent = userStyle.secondCategory.percent
    const largeCircleTitle = userStyle.firstCategory.name
    const littleCircleTitle = userStyle.secondCategory.name
    const largeCircle = {
        strokeWidth: '13',
        cx: '80',
        cy: '80',
        r: '70',
        fill: 'transparent'
    }
    const littleCircle = {
        strokeWidth: '7.5',
        cx: '75',
        cy: '75',
        r: '70',
        fill: 'transparent'
    }

    // Circle length formula
    const circumference = 2 * Math.PI * largeCircle.r
    // Setting occupancy of circle
    const setProgress = (percent) => {
        return circumference - percent / 100 * circumference
    }

    return (
        <div className={'result-page'}>
            <p className={'result-page-title'}>Your style is:</p>
            <div className={'result-page-content'}>
                <div className={'process-rings'}>
                    <div>
                        <div className={'process-ring-large'}>
                            <svg width={'160'} height={'160'} className={'progress-ring'}>
                                <circle style={{
                                    stroke: '#2b2b2b',
                                    strokeDashoffset: setProgress(largeCirclePercent),
                                    strokeDasharray: `${circumference} ${circumference}`
                                }}
                                        {...largeCircle}/>
                            </svg>
                            <p className={'process-ring-percent'}>{largeCirclePercent}%</p>
                            <svg width={'160'} height={'160'}>
                                <circle style={{
                                    stroke: '#e8e8e8',
                                    strokeDashoffset: setProgress(100),
                                    strokeDasharray: `${circumference} ${circumference}`
                                }}
                                        {...largeCircle}/>
                            </svg>
                        </div>
                        <p className={'progress-ring-large-title'}>{largeCircleTitle}</p>
                    </div>
                    <div>
                        <div className={'process-ring-little'}>
                            <svg width={'150'} height={'150'} className={'progress-ring'}>
                                <circle style={{
                                    stroke: '#2b2b2b',
                                    strokeDashoffset: setProgress(littleCirclePercent),
                                    strokeDasharray: `${circumference} ${circumference}`
                                }}
                                        {...littleCircle}/>
                            </svg>
                            <p className={'process-ring-percent'}>{littleCirclePercent}%</p>
                            <svg width={'150'} height={'150'}>
                                <circle style={{
                                    stroke: '#e8e8e8',
                                    strokeDashoffset: setProgress(100),
                                    strokeDasharray: `${circumference} ${circumference}`
                                }}
                                        {...littleCircle}/>
                            </svg>
                        </div>
                        <p className={'progress-ring-little-title'}>{littleCircleTitle}</p>
                    </div>
                </div>
                <div className={'result-page-description'}>
                    <p className={'result-page-description-text'}>{largeCircleTitle} style doesn't like to shout. Rooted
                        in the early to mid-20th century, it elevates the understated with unexpected touches. You'll
                        find a focus on function with architectural shapes and a sophisticated neutral palette.</p>
                    <p className={'result-page-description-afterword'}>Consider {largeCircleTitle} the destination for
                        contemporary classics.</p>
                </div>
            </div>
            <ResultSlider photos={photos}/>
            <div className={'reset-style'}>
                <p>Not satisfied with the result?</p>
                <button onClick={() => destroyStyle()}>Try again</button>
            </div>
        </div>
    )
}