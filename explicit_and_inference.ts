// explicit
const myName:string = "varun";
const mynum:number = 98;
const myObj : {name:string, age:number,isAdult:boolean} = {
    name: "rahul",
    age: 27,
    isAdult: true
}

const greetingName = (name:string)=> {
return `Hello ${name}`;
}
console.log(myName);
console.log(mynum);
console.log(myObj);
console.log(greetingName("varun"));


// inference

let username = "rajiv";
let score = 100;
let arr = [true,false,true];

console.log(username);
console.log(score);
console.log(myObj);
