// Number 
let age:number;

age = 90;

console.log(`Type number ${age}`);

//inline initialize

let price = 10000;
let discount = 5.5;

let total:number;

console.log(`Discount amount  = ${price * 5.5/100}`);

//String

let _name:string;
_name = "Jhon";

console.log(`My name is ${_name}`);

//concat String

let firstName ="Jhon";
let lastname = "Due";

console.log(`My Fullaname is ${firstName} ${lastname}`);

//Boolean

let isActive:boolean;
let inActive:boolean;

isActive = true;
inActive = false;

console.log(`If Active then ${isActive} else InActive ${inActive}`);


isActive?console.log("Your Account Is Active"):console.log("Your Account Inactive");

//Null, Undefined & Symbol

let address=null;
let city =undefined
let country:symbol;
country=Symbol("foo");

console.log(`Your address is ${address} \nyour city is ${city} and your country is`);
console.log(country);


//Array

let fruits=["Apple","Banana","Orange"]

let ages = [10,20,30];

console.log(`I like ${fruits[1]}`);

console.log(`My age is ${ages[2]}`);

// Oject 

let person={
    fullName:"Jhon Due",
    age:30,
    hobbies:["Football","Swimming"]
}

console.log(`My name is ${person.fullName} \nmy age is ${person.age} \nand my hobbies is ${person.hobbies}`);

//function

let numberA =10;
let numberB = 20;

function getNumber(){
    return numberA+numberB;
}

console.log(`My total number is ${getNumber()}`);

// Date 

let dateNow:Date;

dateNow = new Date();

console.log(`Date now is ${dateNow}`);

// Regex