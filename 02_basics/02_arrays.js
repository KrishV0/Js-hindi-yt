const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]
//arr1.push(arr2)
//console.log(arr1) // arr 2 inside of arr1 

const result = arr1.concat(arr2)
console.log(result)

const finalArr = [...arr1,...arr2]
console.log(finalArr)

const arr3 = [11,12,13,14,15]

const farr = arr1.concat(arr2,arr3)
console.log(farr)

const farr2 = [...arr1,...arr2,...arr3]
console.log(farr2)

const anotherArr = [1,2,3,[4,5,6],7,8,9,[10,[11,12]]]
console.log(anotherArr)

const anotherArrsimplification = anotherArr.flat(1)
console.log(anotherArrsimplification)

console.log(Array.isArray("krish"))
const krish = [1,2,3,4]
console.log(Array.isArray(krish))
console.log(Array.from("krish"))
console.log(Array.from({name:"krish"})) // output []  ||     array of what exactly

let a1 = 120
let a2 = 240
let a3 = 360
console.log(Array.of(a1,a2,a3))

//Array.of() = “Of these values, make an array”
//Array.from() = “From this thing, make an array”