import axios from 'axios';

const PRODUCT_BASE_URL = "http://localhost:8093/product";

class AxiosAPI {

    getAllProducts() {
        return axios.get(PRODUCT_BASE_URL+'/getAllProducts')
    }

    getProductById(productId) {
        return axios.get(PRODUCT_BASE_URL+'/getProductById'+productId)
    }

    addProducts(product) {
        return axios.post(PRODUCT_BASE_URL+'/addProduct',product);
    }

    updateProduct(product) {
        return axios.put(PRODUCT_BASE_URL+'/updateProduct',product)
    }

    deleteProduct(productId) {
        return axios.delete(PRODUCT_BASE_URL+'/deleteProduct/'+productId)
    }
}
/* eslint import/no-anonymous-default-export: [2, {"allowNew": true}] */
export default new AxiosAPI()