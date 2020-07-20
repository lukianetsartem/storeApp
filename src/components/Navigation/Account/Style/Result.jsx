import React from 'react'
import {ResultSlider} from "./ResultSlider"

export const Result = () => {
    // Circles settings
    const largeCirclePercent = 62
    const littleCirclePercent = 38
    const largeCircleTitle = 'Modern'
    const littleCircleTitle = 'Industrial'
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

    // Temporary data storage
    const photos = [
        'https://images.prismic.io/made/fa3f86daa56da84a06a92480557a4442b579798f_039_planche.jpg?auto=compress,format',
        'https://images.prismic.io/made/e37af85a183dedc597a5faae3e43fb49f3bf324e_29_planche.jpg?auto=compress,format',
        'https://images.prismic.io/made/411bb3e8443caa168f5fa06a182a50b5e3213a21_169_planche.jpg?auto=compress,format',
        'https://images.prismic.io/made/e646a2aa236dcbae2915ec9282bc1887d2c6a01e_178_planche.jpg?auto=compress,format',
        'https://images.prismic.io/made/6cc27f361471f39acee6d1c7733f58620db41a12_071_planche.jpg?auto=compress,format',
        'https://images.prismic.io/made/eefd87b19c037c33b7f215971bda6876a98c33cf_091_planche.jpg?auto=compress,format',
    ]

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
                    <p className={'result-page-description-text'}>{largeCircleTitle} style doesn't like to shout. Rooted in the early to mid-20th century, it elevates the understated with unexpected touches. You'll find a focus on function with architectural shapes and a sophisticated neutral palette.</p>
                    <p className={'result-page-description-afterword'}>Consider {largeCircleTitle} the destination for contemporary classics.</p>
                </div>
            </div>
            <ResultSlider photos={photos}/>
        </div>
    )
}