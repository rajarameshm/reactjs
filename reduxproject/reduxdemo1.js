const redux_const = require("redux"); //refer redux library
const createStore = redux_const.createStore; //define createStore obect

let mathReducer = (state = 0, action) => { // define reducer, state must have initial data
    if (action.type == "INCREMENT") {
        return state + 1;
    } else if (action.type == "ADD") {
        return state + action.payload;
    }
    return state; //this is the current state
}

let myStore = createStore(mathReducer); // define store

console.log("Initial State: ", myStore.getState());

myStore.subscribe(() => {
    console.log("Current State is: ", myStore.getState());
})

/*
myStore.dispatch({ type: "INCREMENT" });
myStore.dispatch({ type: "INCREMENT" });
myStore.dispatch({ type: "INCREMENT" });
myStore.dispatch({ type: "ADD", payload: 100 }); //payload is suggested by redux, but we can use any name
myStore.dispatch({ type: "INCREMENT" });
*/

// define Action Creators
function increment() {
    return { type: "INCREMENT" };
}
function add(num) {
    return { type: "ADD", payload: num };
}

myStore.dispatch(increment());
myStore.dispatch(add(100));

console.log("Redux demo !!");

