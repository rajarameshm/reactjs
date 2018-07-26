// Component is a Derived class of Component Class
import React, {Component} from "react"
import {Friends, AddFriend} from "./Examples"

class App extends Component {
    state = {cmpHeading: "My React App",
            friendsData1: ["Satya", "Narayana", "Abridge"],
            friendsData2: ["Aytas", "Anayaran", "Egdirba"],
            friendsData3: ["New Friend"]}
    render() {
        return <div>
        <h3>{this.state.cmpHeading}</h3>
        
        <AddFriend addNew={this.addNewFriend} />
        <Friends names={this.state.friendsData1} />
        <hr/>
        <Friends names={this.state.friendsData2}/>
        </div>
    }
    addNewFriend = (friendName) => {
        console.log(friendName);
        //this.setState({friendsData1: this.state.friendsData1.push(friendName)});
        //this.setState({friendsData1: this.state.friendsData1, friendName});
        this.setState({friendsData1: [...this.state.friendsData1, friendName]});
    }

}
export default App
