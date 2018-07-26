import React, { Component } from "react"
import { connect } from "react-redux"

class ProductsList extends Component {
    render() {

        console.log("Data: ", this.props.products);
        let output = this.props.products.map((product, i) => {
            return <div className="card" key={i} >
                <div className="card-header bg-warning" ><b>{product.name}</b></div>
                <div className="card-body" >Price: {product.price}<br />Description: {product.description}</div>
                <div className="card-footer" ><button className="btn-primary">Add To Cart</button></div>
            </div>
        })

        return <div>
            <h4>Products List</h4>
            <div className="card-columns" >
                {output}
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return { products: state };
}

export default connect(mapStateToProps)(ProductsList)

