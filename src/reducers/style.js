import {deleteStyleRequest, getStyleRequest, setStyleRequest} from "../api/user"
import {GET_STYLE, SET_STYLE, getStyleAC, setStyleAC} from "../actions/style"

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
    res.resultCode === 0 && dispatch(getStyleAC(style, analysePhotos, resultPhotos))
}

// Set user style preferences
export const setStyle = (data) => async dispatch => {
    const res = await setStyleRequest(token, data)
    const style = res.style
    res.resultCode === 0 && dispatch(setStyleAC(style))
}

// Delete user style preferences
export const deleteStyle = (data) => async dispatch => {
    const res = await deleteStyleRequest(token, data)
    const style = res.style
    res.resultCode === 0 && dispatch(setStyleAC(style))
}