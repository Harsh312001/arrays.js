// const arr=[1,2,3,4,5];
// console.log(arr)
// arr.push(9)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(4)
// console.log(arr)
// arr.shift()
// console.log(arr)

//conactenation of arrays
// const hero=["harsh","shubham","kartik"]
// const  heros=["shivm","shuvang","kartikey"]
// const papa=hero.concat(heros)
// console.log(papa)

//2 method
// const hero=["harsh","shubham","kartik"]
// const  heros=["shivm","shuvang","kartikey"]
// const newhero=[...hero,...heros]
// console.log(newhero)

//3 methof
// const hero=[[1,2,4],3,4,[3,6,4,[5,3]]]
// const heros=[hero.flat(infinity)]
// console.log(heros)


//string to array
// let word="hitesh"
// console.log(Array.from(word))


// //this is symbol creation
//here jb object ko accesss krte h to simple [] big braket lgake kr lete hai 
//or . oprter k se  sbhi kr skte hai



// const mysym=Symbol("harshm")
// const harh=Symbol("shivam")
// const myword={
//     name:"harsh",
//     age:12,
//     city:"saharanpur",
//     [mysym]:"harhm",
//     [harh]:"mykey2"
// }
// console.log(myword[mysym])
// console.log(myword ["email"])
// console.log(myword["name"])
// console.log(myword ["age"])
// console.log(myword[harh])

//objet ko free krne k liye jisee koi b change n ho uske liye object.freeze(object ka name dal dete hai
//objec tko replay krne k liye jase k email ko chage krne h0 to sime )


//nested objects

// const nameshivam={
//     name1:{
//         shivam:{
//             nameq:"harsh",
//             age:12,
//             adres:"saharanpur",

//         }
   
//     }
// }
// console.log(nameshivam.name1.shivam.age)
//ek sath objects ki value ko target braket m dak dena by using assign values but y objects case
//case hai or arrays k case m value assign k jagah concat use krte hi
// const arr1={1:"a",2:"4"}
// const arr2={3:"s",4:"f"}
// const arr3=Object.assign({},arr1,arr2)
// console.log(arr3)
// //technique for separation in arrays
// const arr4={...arr1,...arr2}
console.log("hloo")