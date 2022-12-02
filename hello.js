console.log("vaibhavi is coding");
console.log(typeof 75754);
console.log(typeof 57466785440);
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

const n = 10;
for ( let i = 0; i<n; i++){
   console.log(i);
};

//handle error
try{
//create error
 throw new Error("vaibhavi is boring");
} catch (err) {
console.log(err);
}

function square(x) {       // x is local variable function k andar hi work karega
     return x+x
}
console.log(       // console.log global variable hr jagah available h
    square(18)
)

//npm init
//npm i cowsay
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oo",
    T : "U "
}));

// or cowsay.think()