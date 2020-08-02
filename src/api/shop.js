import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:4000/shop',
    withCredentials: false,
})

export const getProducts = () => {
    return instance.get('/products/').then(response => response)
}

export const getProduct = (name) => {
    return instance.get(`/products/${name}`).then(response => response)
}

export const getWishList = (token) => {
    return instance.get(`/wishlist/${token}`).then(response => response)
}

export const editWishList = (token, data) => {
    return instance.post(`/wishlist/edit`, {token: token, data: data}).then(response => response)
}

export const addToWishList = (token, data) => {
    return instance.post(`/wishlist/add`, {token: token, data: data}).then(response => response)
}

export const getCart = (token) => {
    return instance.get(`/cart/${token}`).then(response => response)
}

export const updateQuantity = (token, data) => {
    return instance.post(`/cart/quantity`, {token: token, data: data}).then(response => response)
}

export const removeFromCart = (token, data) => {
    return instance.post(`/cart/remove`, {token: token, data: data}).then(response => response)
}

export const addToCart = (token, data) => {
    return instance.post(`/cart/add`, {token: token, data: data}).then(response => response)
}