import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000/shop',
    withCredentials: false,
})

export const getProducts = () => {
    return instance.get('/products/').then(response => response.data)
}

export const addToWishList = (id) => {
    return instance.post(`/wishlist/${id}`).then(response => response.data)
}

export const removeFromWishList = (id) => {
    return instance.delete(`/wishlist/${id}`).then(response => response.data)
}
