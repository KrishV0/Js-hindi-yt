const myArr = [];

if(myArr){
    console.log("ok")
}
else{
    console.log("not ok");
    
}

// fasly values
// false, 0, -0, BigInt 0n, "", null, undefined , NaN

//truthy values
//" ", [], {}, "0", function(){}



// nullish coalescing operator (??) , null undefined

const a = null ?? 10 // prints 10 
console.log(a);

const b = undefined ?? null ?? 20;
console.log(b);


// ternary operator 
//conditon ? true : fasle;



// switch case example

const month = 3;

switch (3) {
    case 1:
        console.log("jan");
        
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march")    
        break;
    default:
        console.log("NOne")
        break;
}

