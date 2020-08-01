export const GET_STYLE = 'GET_STYLE'
export const SET_STYLE = 'SET_STYLE'
export const LOAD_GET_STYLE = 'LOAD_GET_STYLE'
export const LOAD_SET_STYLE =  'LOAD_SET_STYLE'
export const DELETE_STYLE = 'DELETE_STYLE'

export const getStyleAC = (style, analysePhotos, resultPhotos) => {
    return {
        type: GET_STYLE,
        analysePhotos: analysePhotos,
        resultPhotos: resultPhotos,
        style: style
    }
}

export const setStyleAC = (style) => {
    return {
        type: SET_STYLE,
        style: style
    }
}