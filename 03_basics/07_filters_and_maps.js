// for each continuation

const arr = [1,2,3,4,5]

arr.forEach((num)=>{
    //console.log(num);
    return num;// for each doesnt return values 
    //The callback is executed for every element, but its return value is ignored.
})


// Filters

let x = arr.filter((num)=>num>3)
console.log(x); // The callback is executed for every element and the return value isnt ignored

let y = arr.filter((num)=>{
    num>4
})
console.log(y);//empty array cuz a new scope was defined {} , therefore we must use return keyword




const books = [
    {
        title: 'Book One',
        genre: 'Fiction',
        publish: 1981,
        edition: 2004
    },
    {
        title: 'Book Two',
        genre: 'Non-Fiction',
        publish: 1992,
        edition: 2008
    },
    {
        title: 'Book Three',
        genre: 'History',
        publish: 1999,
        edition: 2007
    },
    {
        title: 'Book Four',
        genre: 'Non-Fiction',
        publish: 1989,
        edition: 2010
    },
    {
        title: 'Book Five',
        genre: 'Science',
        publish: 2009,
        edition: 2014
    },
    {
        title: 'Book Six',
        genre: 'Fiction',
        publish: 1987,
        edition: 2010
    },
    {
        title: 'Book Seven',
        genre: 'History',
        publish: 1986,
        edition: 1996
    }
];


let userbooks = books.filter((bk)=>bk.genre==='History')
//userbooks = books.filter((bk)=>bk.publish>=2000)
userbooks = books.filter((bk)=>{
   return bk.edition>=2000} // now we must use return keyword cuz new scope has been opened
)



console.log(userbooks);

//-------------------------------------Maps--------------------------------------------

const numbers = [1,2,3,4,5,6,7,8,9,10]

console.log(numbers.map((n)=>n*7));
console.log(numbers.map((num)=>num>7));// an array of boolean values
console.log(numbers.filter((num)=>num>7));// 8 9 10

const numrs = numbers.map((n)=>n+10).map((n)=>n*10).filter((n)=>n>150)//chaining
console.log(numrs);


// reduce method


const ints = [1,2,3,4,5,6,7,9,10]
//const mytotal = ints.reduce(function(accumalator,currentval){
  //  console.log(`acc is ${accumalator} and currentval is ${currentval}`);
    
   // return accumalator+ currentval

//},0)
 const mytotal = ints.reduce((acc,cv)=>acc+cv,0)

console.log(mytotal);


const shopping = [
    {
        item:"elden Ring",
        price:4800
    },
    {
        item:"Forza Horizon 6",
        price:6000
    },
    {
        item:"GTA 6",
        price:9500
    }

]

console.log(shopping.reduce((acc,cv)=>acc+cv.price,0));
