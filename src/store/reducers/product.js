import { ADD_PRODUCT_TO_CART, GET_PRODUCT_ALL, GET_PRODUCT_BY_ID, GET_SINGLE_PRODUCT,  GET_SEARCHED_PRODUCT} from "../types";

const initState = {
    data: [
        {
            id: "1",
            title: "Caffe Mocha",
            description: "Deep Foam",
            image: "../images/product-1.png",
            categoryId: "1",
            price: "4.53"
        },
        {
            id: "2",
            title: "Flat White",
            description: "Espresso",
            image: "../images/product-1.png",
            categoryId: "1",
            price: "3.53"
        },
        {
            id: "3",
            title: "Latte",
            description: "Creamy",
            image: "../images/product-2.png",
            categoryId: "2",
            price: "3.99"
        },
        {
            id: "4",
            title: "Espresso",
            description: "Strong",
            image: "../images/product-3.png",
            categoryId: "2",
            price: "2.99"
        },
        {
            id: "5",
            title: "Cappuccino",
            description: "Frothy",
            image: "../images/product-2.png",
            categoryId: "3",
            price: "4.25"
        },
        {
            id: "6",
            title: "Macchiato",
            description: "Stained",
            image: "../images/product-3.png",
            categoryId: "4",
            price: "3.75"
        },
        {
            id: "7",
            title: "Americano",
            description: "Diluted",
            image: "../images/product-2.png",
            categoryId: "3",
            price: "3.25"
        },
        {
            id: "8",
            title: "Mocha Frappe",
            description: "Frozen",
            image: "../images/product-1.png",
            categoryId: "1",
            price: "5.49"
        },
        {
            id: "9",
            title: "Affogato",
            description: "Drowned",
            image: "../images/product-3.png",
            categoryId: "3",
            price: "4.99"
        },
        {
            id: "10",
            title: "Irish Coffee",
            description: "Whiskey",
            image: "../images/product-1.png",
            categoryId: "2",
            price: "6.49"
        }
    ],
    products: [],
    cart: []
}


const ProductReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_BY_ID:
            return {...state, products: state.data.filter(item => item.categoryId === payload)};

        case GET_PRODUCT_ALL:
            return {...state, products: state.data};

        case ADD_PRODUCT_TO_CART:
            return {...state, cart: [...state.cart, state.data.find(item => item.id === payload)]};

        case GET_SINGLE_PRODUCT:
            return { ...state, products: state.data.filter(item => item.id === payload)};

        case GET_SEARCHED_PRODUCT:
            return {
                ...state,
                products: state.data.filter(item =>
                    item.title.toLowerCase().includes(payload.toLowerCase())
                ),
            }

        default:
            return state;
    }
}

export default ProductReducer;



// 1. Создаем Action с называнием addProductToCart()
// 2. addProductToCart в качестве payload принимает productId
// 3. Нужно создавать тип данных, ADD_PRODUCT_TO_CART
// 4. Создаем case редюсер для ADD_PRODUCT_TO_CART
// 5. Нужно скопировать state, cart: [нужно скопировать cart сюда, далее сюда добавить новые данные которые нашли с помощью id] 