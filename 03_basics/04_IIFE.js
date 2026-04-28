// immediately invoked function expression 

//named iife
(function walk(){
    console.log("walk");
    
})(); // ; is very imp cuz semicolon is required to protect the next statement from being merged



//simple iife
((name) =>{
    console.log(name);
    
})("krish")