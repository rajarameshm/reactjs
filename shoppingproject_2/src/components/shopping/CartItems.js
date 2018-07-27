import React, { Component } from "react"
import { connect } from "react-redux"

class CartItems extends Component {
    render() {

        


        return <div>
            <h4>Cart Items: <span className="badge badge-primary">{this.props.cartItems.length} </span></h4>
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th></th><th>Name</th><th>Price</th><th>quantity</th><th>Amout</th>
                    </tr>
                </thead>
                <tbody>{this.buildOutput()}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="4">Total Amount: </th>
                        <td>{this.totalAmount()}</td>
                    </tr>
                </tfoot>
            </table>
        </div>


    }

    totalAmount = () => {
        let tot = 0;
        for(let e of this.props.cartItems){
            tot += (e.price * e.qty)

        }
        return tot;
    }



    buildOutput() {
        let output = null;
        if (this.props.cartItems.length === 0) {
            output = <tr><td colSpan="5">No Data Found.</td></tr>;
        }
        else {
            output = this.props.cartItems.map((item, i) => {
                return <tr key={i}>
                    <td><button className="btn btn-danger" onClick={() => this.props.removeFromCart(item)}>X</button></td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.qty}</td>
                    <td>{item.price * item.qty}</td>
                </tr>;
            });
        }
        return output;
    }
}

function mapStateToProps(state) {
    return { cartItems: state.cartReducer }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (item) => {
            dispatch({ type: "REMOVE_FROM_CART", payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems)