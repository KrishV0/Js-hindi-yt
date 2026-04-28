
function details(){
    console.log("oo");
    
}

details // function reference

// in order to execute function 
details()

function addTwoNumbers(number1,number2){
    return number1 + number2
}

console.log(addTwoNumbers(5,7)) 
console.log(addTwoNumbers(5,"7")) // converts 5 to a string
console.log(addTwoNumbers(5,"a")) 
console.log(addTwoNumbers(5,null)) 
console.log(addTwoNumbers(5,undefined)) 

const a = addTwoNumbers(15,7) 
console.log(a);

function loginUserName(username){
    return `${username} just logged in `
}

console.log(loginUserName("krish"))



function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400,500)) // use rest operator(...) to create an array
//to pass as many arguments as required  

function calculateCartPrice2(val1,val2,...num2){
    return num2
}

console.log(calculateCartPrice2(200,300,4000,50005,600))


const user = {
    username : "krish",
    age : 19
}

function genObject(anyObject){
    return `name of user is ${anyObject.username} and his age is ${anyObject.age}`
}

console.log(genObject(user));
console.log(genObject({
  username:"Goat",
  age:20
}))

const myArr = [10,20,30]
function returnThirdValue(anyArr){
    return anyArr[2]
}

console.log(returnThirdValue(myArr))
