import { GET_PRODUCT_BY_ID, GET_PRODUCT_ALL, ADD_PRODUCT_TO_CART, GET_SINGLE_PRODUCT, GET_SEARCHED_PRODUCT} from "../types";


export const getProductById = (payload) => ({
    type: GET_PRODUCT_BY_ID,
    payload
});

export const getProductAll = () => ({
    type: GET_PRODUCT_ALL 
});

export const addProductToCart = (payload) => ({ 
    type: ADD_PRODUCT_TO_CART, 
    payload 
});

export const getSingleProduct = (payload) => ({ 
    type: GET_SINGLE_PRODUCT, 
    payload 
});

export const getSearchedProduct = (payload) => ({ 
    type: GET_SEARCHED_PRODUCT, 
    payload 
});

