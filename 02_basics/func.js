// function addtwonumber(number1, number2){
//    let result=(number1+number2)
//    return result
// }
// let ans=addtwonumber(3,4)
// console.log(ans)




//arrows function
// const user={
//    name:"harsh ",
//    id:12,
//    city:"saharanpur",
//    welcome:function(){
//       console.log(`${this.name}, yoour id is ${this.id},thanku to reach us harsh maheshwari j`)
//       console.log(this)
//    }
// }
// user.welcome();
// user.name="sam";
// user.welcome();


//uin arrow fudntion
// const user=(num1,num2)=>{
//    return num1+num2
// }
// console.log(user(2,4))


//IIFE
//global scope k poltuion ko hatane k liye IIFE  USE karte h 
//IIfe k use m Brackets laga dete hai

(function chai(){
   console.log("harsh")
})
();
(function aurcode(){
   console.log("harsh")
})
()