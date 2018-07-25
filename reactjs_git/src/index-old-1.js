/*
import Pnt, {Point3D} from "./mod1" //Default members should not be enclosed with braces
// Instance of class: Point
let p1 = new Pnt(1, 2);
p1.display();
let p2 = new Point3D(10, 20, 30);
p2.display();
*/
import React from "react"
import ReactDOM from "react-dom"

//let element = React.createElement("u", null, "Wells Fargo");
let root = document.getElementById("root");
//ReactDOM.render(element, root); //react way
ReactDOM.render(<div><b>Wells Fargo in BOLD</b><u>, Hyderabad-{9+9+"/A"}</u></div>, root); //JSX way


console.log("Index File Message !!!")
