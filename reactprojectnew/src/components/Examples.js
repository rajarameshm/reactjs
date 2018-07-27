import React, {Component} from "react"

export class Friends extends Component {
    state = {name: "My friends"}
    render() {
        console.log(this.props.names);//parent to child communication throgh 'props'
        let output = this.props.names.map((e, i) => {
            return <li key={i}>{i+1}. {e}</li>;
        })
    
        return <div>
            <h5>{this.state.name}:</h5>
            <ul>{output}</ul>
            </div>
    }
}

export class AddFriend extends Component {
    state = {newFriend: "guest", other: "test"}
    render() {
        console.log(this.props.state);
    
        return <div>
            <input type="text" id="name" placeholder="Enter Friend Name" value={this.state.newFriend} onChange={this.handleOnChange} />
            <input type="button" value="Add Friend" onClick={this.handleAddNew} />
            </div>
    }

    handleOnChange = (event) => {
        //console.log("On Change handle function..."+event.target.value);
        //this.state.newFriend = event.target.value;
        this.setState({newFriend: event.target.value});
    }
    //child to parent communication is through 'props' and 'state'
    handleAddNew = (event) => {
        console.log(this.state.newFriend);
        this.props.addNew(this.state.newFriend); 
    }

}