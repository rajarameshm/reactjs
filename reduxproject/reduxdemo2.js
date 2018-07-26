const redux_const = require("redux"); //refer redux library
const createStore = redux_const.createStore; //define createStore obect

let mathReducer = (state = { count: 0 }, action) => { // define reducer, state must have initial data

    switch (action.type) {
        case "DEVIDE":
            return { count: state.count / action.payload };
        case "MULTIPLY":
            return { count: state.count * action.payload };
        case "ADD":
            return { count: state.count + action.payload };
        case "SUBTRACT":
            return { count: state.count - action.payload };
        default:
            return state; //this is the current state
    }
}

let myStore = createStore(mathReducer); // define store

console.log("Initial State: ", myStore.getState());

myStore.subscribe(() => {
    console.log("Current State is: ", myStore.getState());
})

// define Action Creators
function devide(num) {
    return { type: "DEVIDE", payload: num };
}
function multiply(num) {
    return { type: "MULTIPLY", payload: num };
}
function add(num) {
    return { type: "ADD", payload: num };
}
function subtract(num) {
    return { type: "SUBTRACT", payload: num };
}
myStore.dispatch(add(100));
myStore.dispatch(multiply(10));
myStore.dispatch(subtract(500));
myStore.dispatch(devide(500));

console.log("Redux demo !!");

myarray = [225, 250];
console.log(myarray);
arr2 = [100, 200, ...myarray, 300]
console.log(arr2);
arr3 = [...arr2.slice(0,1), ...arr2.slice(2)]
console.log(arr3);
arr3 = [...arr2.slice(0,1),55, ...arr2.slice(2)]
console.log(arr3);

