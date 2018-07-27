for (let i=0;i<=5;i++) {console.log(i);}
//console.log("value of i after FOR loop is ", i);
const c = 800;
console.log(c);
//c=700;
//Anonymous Function
let m = function() {
    return "WellsFargo";
}
console.log(m);
console.log(m());
//Arrow Function
let p = () => "Hellow World";
console.log(p())
//Arrow Function with arg and return
let f = (msg) => msg;
console.log(f(30));
console.log(f("WF"));
console.log(f(true));
let f1 = msg => msg; //brackets also removed for function
console.log(f1(30));
console.log(f1("WF"));
console.log(f1(true));
function change() {
    let d = document.getElementById("h");
    let v = d.getAttribute("reply");
    d.innerHTML = v;
}