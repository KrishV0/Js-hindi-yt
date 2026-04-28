// scope is {} , global scope and local scope is the reason we must use let over var

var a = 300; // global declaration
let b = 100;

if (true) {
    a = 30; // local declaration
    b=100
    
}

console.log(a) // value is overriden 
console.log(b)// global value meaning block scoping is involved

function one(){
    const username = "krish"
    function two(){
        const age = 19
        console.log(username) // yes this function can access username
    }
    console.log(age)// no this function cannot access age
    two() 
}

//one() 

function x(){
    const name = "Goat"
    function y(){
        const age = 20
        console.log(name)
    }
   y()
}
x()

// similar results for if statements


wow() // yes this is possible
function wow(){
    console.log(wow)
}

wow2() // not possible , cannot call this fn as it has not been defined yet 
const imp = function wow2(){
    console.log(wow2)
}