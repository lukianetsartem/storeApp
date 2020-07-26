import {deleteStyleRequest, getStyleRequest, setStyleRequest} from "../api/auth";

const SET_STYLE = 'SET_STYLE'
const GET_STYLE = 'GET_STYLE'

const token = localStorage.getItem('token')
const initialState = {
    isDataLoaded: false,
    analysePhotos: [],
    resultPhotos: [],
    style: {},
}

export const style = (state = initialState, action) => {
    switch (action.type) {
        case SET_STYLE:
            return {
                ...state,
                isDataLoaded: false,
            }
        case GET_STYLE:
            return {
                ...state,
                userStyle: action.style,
                resultPhotos: action.resultPhotos,
                analysePhotos: action.analysePhotos,
                isDataLoaded: true,
            }
        default:
            return state
    }
}

// Get user style preferences
export const getStyle = () => async dispatch => {
    const res = await getStyleRequest(token)
    const analysePhotos = res.analysePhotos
    const resultPhotos = res.resultPhotos
    const style = res.style
    res.resultCode === 0 && dispatch({type: GET_STYLE, style, analysePhotos, resultPhotos})
}

// Set user style preferences
export const setStyle = (data) => async dispatch => {
    const res = await setStyleRequest(token, data)
    const style = res.style
    res.resultCode === 0 && dispatch({type: SET_STYLE, style})
}

// Delete user style preferences
export const deleteStyle = (data) => async dispatch => {
    const res = await deleteStyleRequest(token, data)
    const style = res.style
    res.resultCode === 0 && dispatch({type: SET_STYLE, style})
}

