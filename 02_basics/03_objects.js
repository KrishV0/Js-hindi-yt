//Object literals

const mySym = Symbol("key1")

const jsUser = {
    [mySym]:"xx", //square brackets for symbols
    "my Name":"sh",
    name:"Krish",
    myAge:19,
    email:"Krishsh@gmail.com",
    isLoggedIn:false,
    lastLoggedIn:["Monday","Tuesday"]
    // the point is for any key the value can be of any datatype ,name doesnt specifically
    //have to be a string,it can be anything


}
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])
console.log(jsUser["my Name"])
//console.log(jsUser.my Name) WRONG

jsUser.email = "xx@gamil.com"
console.log(jsUser.email)
//Object.freeze(jsUser)
jsUser.email = "hahah@gamil.com"
console.log(jsUser.email)

jsUser.greetings = function(){
    console.log("JS")
}
console.log(jsUser.greetings())
console.log(jsUser.greetings) // output is Function (anonymous) cuz the function isnt executed
//just the reference is created

jsUser.greetingsTwo = function(){
    console.log(`JS,${this.name}`)
}
console.log(jsUser.greetingsTwo())