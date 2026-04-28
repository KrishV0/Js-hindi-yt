const user = {
    username : "krish",
    age :19,
    welcome : function(){
       console.log(`${this.username},welcome to website`);//points to current context
       console.log(this);// prints everything present in this onj
       
       
    }
    
}

  console.log(user.welcome());
  user.username = "goat"
  console.log(user.welcome());
  console.log(this);// output is {} cuz there is no current context



  function one(){
    console.log(this)
  }

  //one()
  
  function two(){
    let name = "kk"
    console.log(this.name);// undefined , unable to use this keyword inside fn like this
    // same output if u store the fn in a variable
  }

//two() 

const a = () => {
    let nname = "gg"
    console.log(this.nname); // output is {}
    
}


const addTwoNum = (num1,num2) =>{
    return num1 + num2
}

console.log(addTwoNum(5,5));


const addThreeNum = (number1,number2,number3)=>number1+number2+number3
//const addThreeNum = (number1,number2,number3)=>(number1+number2+number3)
console.log(addThreeNum(2,2,2));

const sum = (numm1,numm2) =>({user:"krish"})
console.log(sum());
