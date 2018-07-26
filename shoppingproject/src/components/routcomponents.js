import React, { Component } from "react"
import ProductsList from "./shopping/ProductsList";
import { CartItems } from "./shopping/CartItems";

export class List extends Component {
    render() {
        return <div className="row">
            <div className="col-sm-7">
                <ProductsList />
            </div>
            <div className="col-sm-5 card card-body">
                <CartItems />
            </div>
        </div>
    }
}

export class NotFound extends Component {
    render() {
        return <div>
            <h3>404. Oooops!! Not Found.</h3>
        </div>
    }
}