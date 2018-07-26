import React, { Component } from "react"
import { connect } from "react-redux";

class ManageProducts extends Component {
    render() {

        //console.log(this.props.mgProducts);
        let output = this.props.mgProducts.map((product, i) => {
            return <tr key={i}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
            </tr>
        })

        return <div>
            <h4>Manage Products</h4>
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Price</th><th>Description</th>
                    </tr>
                </thead>
                <tbody>{output}</tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    }
}

function mapStateToProps(state) {
    return { mgProducts: state }
}

export default connect(mapStateToProps)(ManageProducts)