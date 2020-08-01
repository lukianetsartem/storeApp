import {GET_STYLE, SET_STYLE} from "../actions/style"

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