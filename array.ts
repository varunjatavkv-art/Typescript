// typescript array

// array of string
let myArr:string[] = [];
myArr.push("Dylan");
console.log(myArr);

// array of number
let numArr:number[] = [];
numArr.push(1);
numArr.push(2);
console.log(numArr);

// array of boolean
let boolArr:boolean[] = [];
boolArr.push(true);
// boolArr.push("h");
console.log(boolArr);


// array of multiple data types
let multiArray: (string | number | boolean)[] = [];
multiArray.push("varun");
multiArray.push(1);
multiArray.push(true);
console.log(multiArray);


// array with readonly property
let stringArray: readonly string[] = ["Varun"];
// stringArray.push("Hii")

console.log(stringArray);
