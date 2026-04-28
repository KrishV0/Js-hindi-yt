
const ytUser = new Object() // singleton object
console.log(ytUser);


const regular = {
    1:"ok",
    fullname :{
        username:{
            firstname:"Krish",
            lastname:"Sharma"
        }
    }
}
console.log(regular.fullname);
console.log(regular.fullname.username); // u can create onjects inside objects (nested objects)
console.log(Object.keys(regular))
console.log(Object.values(regular))
console.log(Object.entries(regular))

const obj1 = {
    1:"a",2:"b"
}
const obj2 = {
    3:"c",4:"d"
}

const obj3 = {obj1,obj2}
console.log(obj3);

const combinedObj = Object.assign(obj1,obj2) //here obj1 is the TARGET obj and obj2 is the
//SOURCE obj , all the entities of obj2 is stored in obj1 meaning .assign is a mutating meth

console.log(combinedObj);
console.log(obj1===combinedObj) 

const bestcombinationObj = {...obj1,...obj2}
console.log(bestcombinationObj);

// multiple objects in an array

const arr = [
  {1:"aa",2:"bb"},
  {3:"cc",4:"dd"},
  {5:"ee",6:"ff"}
]
console.log(arr[2]);


//-----------------------------------Obj destructure-----------------------------------------


const course = {
    coursename:"js",
    price:"free",
    platform:"yt"
}

// course.coursename

const {coursename} = course
console.log(coursename);

const {price:p} = course
console.log(p);

