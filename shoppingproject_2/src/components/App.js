import React, { Component } from "react"
import { Route, Link, Switch } from "react-router-dom"
import { List, NotFound } from "./routcomponents"
import ManageProducts from "./shopping/ManageProducts";

class App extends Component {
    state = { appHeading: "My Shopping App" }
    render() {
        return <div>
            <nav className="navbar bg-dark navbar-expand-sm navbar-dark">
                {/*<a href="" className="navbar-brand" >{this.state.appHeading}</a>*/}
                <Link to="/" className="navbar-brand" >{this.state.appHeading} ></Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <   Link to="/list" className="nav-link">Shopping List</Link>
                    </li>
                    <li className="nav-item">
                        <   Link to="/manage" className="nav-link">Manage Products</Link>
                    </li>
                </ul>
            </nav>
            <Switch> {/* path "*" should be end of all */}
                <Route path="/" exact render={() => <h3>Welcome to my Shopping Cart App</h3>} />
                <Route path="/list" component={List} />
                <Route path="/manage" component={ManageProducts} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    }
}

export default App