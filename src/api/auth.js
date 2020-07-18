import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:4000/auth/',
    withCredentials: false,
})


export const signInRequest = (authData) => {
    return instance.post('/signin', authData).then(response => response.data)
}

export const signUpRequest = (authData) => {
    return instance.post('/signup', authData).then(response => response.data)
}