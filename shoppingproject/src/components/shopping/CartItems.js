import React, { Component } from "react"

export class CartItems extends Component {
    render() {
        return <div>
            <h4>Cart Items</h4>
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th>Name</th><th>Price</th><th>quality</th><th>Amout</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="3">Total Amount: </th>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    }
}

export default CartItems