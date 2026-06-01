//for of

const arr = ["a","b","c"]

for (const item of arr) {  // const __ of __  , const __ whatever name u want u can use it
    console.log(item);     // to iterate through each element of array
    
}

const y ="krish"

for (const x of y) {
    console.log(x);
    
}

// maps

const map = new Map();
map.set("IN","india")
map.set("FR","france")
map.set("GER","germany")

console.log(map);


for (const x of map) {
    console.log(x); // returns map in an array (both key and values)
    
}

for (const [x,y] of map) {
    console.log(x+"-"+y);
    
}


const obj1 = {
    "a" : "nfs",
    "b": "doom 3"
}

//for (const item of obj1) {
    // console.log(obj1); cannot iterate objects using forof loops
     
//}


//forin

const obj2 = {
    a : "ronaldo",
    b: "messi",
    c: "olise"
}


for (const item in obj2) {
    
 console.log(item);///prints only the key
    
}

for (const key in obj2) {
    
    console.log(obj2[key]); // prints value
    
}

for (const key in obj2) {
    
    console.log(`the value of ${key} is ${obj2[key]}`); 
    
}

const programming = ["a","b","c","d","e"]

for (const key in programming) {
    
   // console.log(key); // prints indices
    console.log(programming[key]);
    
    
}

for (const key in map) {
    console.log(key);// no output
    
}

// for...in iterates over enumerable object properties (keys)
// for...of iterates over iterable values (via Symbol.iterator)
//
// Objects store data as enumerable properties → for...in works
// Map stores data internally and exposes it via an iterator → for...of works
//
// Example:
// const obj = { a: "1", b: "2" };
// → 'a' and 'b' are enumerable properties (for...in works)
//
// const map = new Map([["a", "1"], ["b", "2"]]);
// → 'a' and 'b' are NOT enumerable properties (for...in fails)
// → but they are iterable entries (for...of works)









// forEach()

const myarr = [1,2,3,4,5]

myarr.forEach(function(item){ // dont write the name of the fn
    console.log(item);
    
})


myarr.forEach((item)=>{ // dont write the name of the fn
    console.log(item);
    
})

function printMe(item){
    console.log(item);
    
}

myarr.forEach(printMe)


myarr.forEach((item,index,arr)=>{ // dont write the name of the fn
    console.log(item,index,arr);
    
})


const myyarr = [
    {
        languageName : "js",
        languageFileName : "js"

    },
    {
       languageName:"java",
       languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myyarr.forEach((item)=>{
     console.log(item.languageName);
     
})

