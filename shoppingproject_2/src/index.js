import React from "react"
import ReactDOM from "react-dom"
import ShoppingApp from "./components/App" //this refers to App as it is default
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from "react-router-dom"
import { createStore, combineReducers } from "../node_modules/redux";
import { Provider } from "react-redux";

let productsData = [
    { "id": 1, "name": "Sony", "price": 55000, "description": "Sony TV" },
    { "id": 2, "name": "LG", "price": 65000, "description": "LG TV" },
    { "id": 3, "name": "Samsung", "price": 75000, "description": "Samsung TV" },
    { "id": 4, "name": "Thoshiba", "price": 85000, "description": "Thoshiba TV" },
    { "id": 5, "name": "Mac Book", "price": 95000, "description": "Mac Book" }
]

let productReducer = (state = productsData, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("Product reducer ADD_TO_CART");
            let p = state.filter((product) => product.id != action.payload.id)
            return p;
        case "REMOVE_FROM_CART":
            console.log("Cart Reducer Remove from Cart");
            state = [...state, action.payload]
            return state;
        case "ADD_PRODUCT":
            console.log("Add Product");
            state = [...state, action.payload]
            return state;
        case "DELETE_PRODUCT":
            console.log("Delete Product", action.payload);
            let idx = state.findIndex((e) => e.id == action.payload)
            return [...state.slice(0, idx), ...state.slice(idx + 1)]
        case "UPDATE_PRODUCT":
            console.log("Update Product", action.payload);
            let idx2 = state.findIndex((e) => e.id == action.payload.id)
            return [...state.slice(0, idx2), action.payload, ...state.slice(idx2 + 1)]
        case "GET_PRODUCTS":
            console.log("Get Products", action.payload);
            return action.payload
        default: return state;
    }
}

let cartData = [];
let cartReducer = (state = cartData, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("Cart Reducer Add To Cart");
            state = [...state, action.payload]
            return state;
        case "REMOVE_FROM_CART":
            console.log("Cart Reducer Remove from Cart");
            let p = state.filter((product) => product.id !== action.payload.id)
            return p;

        default: return state;
    }

}

//let appStore = createStore(productReducer); //to register single reducer
let appStore = createStore(combineReducers({ productReducer, cartReducer })); //to register multiple reducers

//Provider tag is from react-redux library to integrate redux with react
ReactDOM.render(
    <Provider store={appStore} >
        <BrowserRouter basename="/myshop/" >
            <ShoppingApp />
        </BrowserRouter></Provider>
    , document.getElementById("root"));
