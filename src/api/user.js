import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:4000/auth/',
    withCredentials: false,
})


export const signIn = (authData) => {
    return instance.post('/signin', authData).then(response => response)
}

export const signUp = (authData) => {
    return instance.post('/signup', authData).then(response => response)
}

export const changePassword = (token, data) => {
    return instance.post('/reset-password', {token: token, data: data}).then(response => response)
}

export const getUserData = (token) => {
    return instance.get(`/data/${token}`).then(response => response)
}

export const editUserData = (token, data) => {
    return instance.post(`/data`, {token: token, data: data}).then(response => response)
}

export const getUserAddress = (token) => {
    return instance.get(`/address/${token}`).then(response => response)
}

export const setUserAddress = (token, address) => {
    return instance.post(`/address`, {token: token, data: address}).then(response => response)
}

export const setStyle = (token, data) => {
    return instance.post(`/style`, {token: token, data: data}).then(response => response)
}

export const getStyle = (token) => {
    return instance.get(`/style/${token}`).then(response => response)
}

export const deleteStyle = (token) => {
    return instance.delete(`/style/${token}`).then(response => response)
}
