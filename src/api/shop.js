import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:4000/shop',
    withCredentials: false,
})

export const getProducts = () => {
    return instance.get('/products/').then(response => response.data)
}

export const getWishList = (token) => {
    return instance.get(`/wishlist/${token}`).then(response => response.data)
}