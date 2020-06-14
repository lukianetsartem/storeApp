import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: false,
})

export const productsAPI = {
    setProducts() {
        return instance.get('/products/').then(response => response.data)
    }
}