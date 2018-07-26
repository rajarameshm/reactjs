import React from "react"
import ReactDOM from "react-dom"
import ShoppingApp from "./components/App" //this refers to App as it is default
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from "react-router-dom"
import { createStore } from "../node_modules/redux";
import { Provider } from "react-redux";

let productsData = [
    { "id": 1, "name": "Sony", "price": 55000, "description": "Sony TV" },
    { "id": 2, "name": "LG", "price": 65000, "description": "LG TV" },
    { "id": 3, "name": "Samsung", "price": 75000, "description": "Samsung TV" },
    { "id": 4, "name": "Thoshiba", "price": 85000, "description": "Thoshiba TV" }
]

let productReducer = (state = productsData, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("Product reducer ADD_TO_CART");
            return state;
        default: return state;
    }
}

let appStore = createStore(productReducer);

//Provider tag is from react-redux library to integrate redux with react
ReactDOM.render(
    <Provider store={appStore} >
        <BrowserRouter>
            <ShoppingApp />
        </BrowserRouter></Provider>
    , document.getElementById("root"));
