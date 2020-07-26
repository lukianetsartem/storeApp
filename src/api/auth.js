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

export const changePasswordRequest = (token, data) => {
    return instance.post('/reset-password', {token: token, data: data}).then(response => response.data)
}

export const getUserDataRequest = (token) => {
    return instance.get(`/data/${token}`).then(response => response.data)
}

export const editUserDataRequest = (token, data) => {
    return instance.post(`/data`, {token: token, data: data}).then(response => response.data)
}

export const getUserAddressRequest = (token) => {
    return instance.get(`/address/${token}`).then(response => response.data)
}

export const setUserAddressRequest = (token, address) => {
    return instance.post(`/address`, {token: token, data: address}).then(response => response.data)
}

export const setStyleRequest = (token, data) => {
    return instance.post(`/style`, {token: token, data: data}).then(response => response.data)
}

export const getStyleRequest = (token) => {
    return instance.get(`/style/${token}`).then(response => response.data)
}

export const deleteStyleRequest = (token) => {
    return instance.delete(`/style/${token}`).then(response => response.data)
}
