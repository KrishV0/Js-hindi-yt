//primitive datatypes
//  7 types
// String,number,bollean,null,undefined,symbol,bigint

//Reference(non primitive)
//Array,objects,function

const id = "123"
const anotherId = Symbol("123")
console.log(id === anotherId)

const chars = ["obito","Madara","karin"];

const myFunction = function(){
    console.log("Hello World")
}

const myObj ={
    name:"Krish",
    age:19,
}



//Memory
//Stack and Heap

let accname = "one"
let acc2name = accname
acc2name = "two"

console.log(accname) // one
console.log(acc2name)//two
// Stack provides a copy therefore accname wasnt changed only acc2name was changed

let user1 = {
    name:"krish",
    age:19
}

let user2 = user1

user1.name = "goatedV1"
console.log(user2.name) // goatedv1
console.log(user1.name) // goatedv1

// objects or variables of non primitives are stored in heap , in the above example
//both user1 and user2 points to the reference making permanent changes

let n1 = "one"
let n2 = n1
n2 = "two"
console.log(n1)
console.log(n2)