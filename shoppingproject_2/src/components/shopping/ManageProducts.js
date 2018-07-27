import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class ManageProducts extends Component {

    constructor() {
        super()
        console.log("Constructor: called only once, properties are NOT available here");
        this.apiUrl = "http://localhost:4000/wsproducts";
    }
    componentWillMount() {
        console.log("componentWillMount: called only once, properties are available here", this.props.mgProducts);
        //document.querySelector("h4").style.color="red"
    }
    componentWillUnmount() {
        console.log("component will unmount !!")
    }
    componentDidMount() {
        console.log("component did mount !!")
        document.querySelector("h4").style.color = "red"
        axios.get(this.apiUrl).then(
            (resp) => {
                console.log("Success: ", resp.data)
                this.props.getProducts(resp.data)
            }, (err) => {
                console.log("Error: ", err)
            }
        )
    }

    render() {

        console.log("render !!");
        let output = this.props.mgProducts.map((product, i) => {
            return <tr key={i}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={() => this.handleDelete(product.id)}>Delete</button>
                    <button className="btn btn-success" type="button" onClick={() => this.handleEdit(product)}>Edit</button>
                </td>
            </tr>
        })

        return <div>
            <h4>Manage Products</h4>
            <form>
                <input type="text" ref="pid" placeholder="Product Id" readOnly />
                <input type="text" ref="pname" placeholder="Product Name" />
                <input type="text" ref="price" placeholder="Product Price" />
                <input type="text" ref="desc" placeholder="Product Description" />
                <button className="btn btn-primary" type="button" onClick={this.handleAdd} >Add</button>
                <button className="btn btn-warning" type="button" onClick={this.handleUpdate} >Update</button>
            </form>
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Price</th><th>Description</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>{output}</tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    }

    handleAdd = () => {
        console.log("Add Button: ", this.refs.pname.value);
        //let newProduct = { id: this.refs.pid.value, name: this.refs.pname.value, price: this.refs.price.value, description: this.refs.desc.value }
        //this.props.addProduct(newProduct) 

        let newProduct = { name: this.refs.pname.value, price: this.refs.price.value, description: this.refs.desc.value }
        axios.post(this.apiUrl, newProduct).then(
            (resp) => {
                console.log("Add success")
                this.props.addProduct(resp.data)
            }, (err) => {
                console.log("Add error")
            }
        )
    }
    handleDelete = (id) => {
        console.log(id);
        //this.props.deleteProduct(id)
        axios.delete(this.apiUrl + "/" + id).then(
            (resp) => {
                console.log("Delete success")
                this.props.deleteProduct(id)
            }, (err) => {
                console.log("Delete error")
            }
        )
    }
    handleEdit = (product) => {
        console.log(product);
        this.refs.pid.value = product.id;
        this.refs.pname.value = product.name;
        this.refs.price.value = product.price;
        this.refs.desc.value = product.description;
    }
    handleUpdate = () => {
        let modifiedProduct = {
            id: this.refs.pid.value,
            name: this.refs.pname.value,
            price: this.refs.price.value,
            description: this.refs.desc.value
        }
        console.log("Update ", modifiedProduct)
        //this.props.updateProduct(modifiedProduct);

        axios.put(this.apiUrl + "/" + this.refs.pid.value, modifiedProduct).then(
            (resp) => {
                console.log("Update success")
                this.props.updateProduct(resp.data)
            }, (err) => {
                console.log("Update error")
            }
        )
    }


}

function mapStateToProps(state) {
    return { mgProducts: state.productReducer }
}

function mapDispatchToProps(dispatch) {
    return {
        addProduct: (newProduct) => {
            dispatch({ type: "ADD_PRODUCT", payload: newProduct })
        },
        deleteProduct: (id) => {
            dispatch({ type: "DELETE_PRODUCT", payload: id })
        },
        updateProduct: (product) => {
            dispatch({ type: "UPDATE_PRODUCT", payload: product })
        },
        getProducts: (data) => {
            dispatch({ type: "GET_PRODUCTS", payload: data })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageProducts)