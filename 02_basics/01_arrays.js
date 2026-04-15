
const myArr = [0,1,2,3,4,5];
console.log(myArr)
console.log(myArr[2])
console.log(typeof myArr)


let Arr1 = [2,2,231,34]
let Arr2 = Arr1 // refernce to Arr1 , no new arr was created
Arr2 = [3,23,12]// now new array is created , refernce is broken
console.log(Arr1) // 2,2,231,34  unchanged 

let Arr3 = new Array(1,2,3,4)
console.log(Arr3)


// Array methods

let myArr4 = [0,1,2,3,4,5,6]

console.log(myArr4.push(32)) // adds a new element and prints the length
console.log(myArr4)


console.log(myArr4.pop()) // removes the last element and prints it
console.log(myArr4.pop()) 
console.log(myArr4)  



console.log(myArr4.unshift(9)) // adds an element to the 0th index
console.log(myArr4) 


console.log(myArr4.shift())
console.log(myArr4) // removes the element present at the 0th index



console.log(myArr4.includes(4)) // returns true or false 

const myarr = myArr.join() // join() is a non mutating method meaning it wont change the og arr
console.log(myArr)
console.log(myarr) // converts to string 
console.log(typeof myarr)


// slice vs splice

let Myarr5 = [0,1,2,3,4,5]
console.log(Myarr5.slice(1,3))
console.log(Myarr5)  // og array unchanged meaning non mutating method

console.log(Myarr5.splice(1,3)) // starts from 1st index and 3 tells that 3 elements should be removed
//unlike slice where (,_) it talks about the end index
console.log(Myarr5) // og string manipulated meaning mutating method
