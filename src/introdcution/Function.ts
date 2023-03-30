//Example Function

function print():void{
    console.log('Hello World');
}

//Call function
print();

function calculateNumber():number{
    return 10 +10;
}

console.log(`10 + 10 = ${calculateNumber()}`)


//Type return
function sumNumber(a:number, b:number):number{
    return a+b;
}

console.log(`A + B = ${sumNumber(10,30)}`)

//Type param
function message(message:string):string{
    return message;
}

console.log(message('Learning function in TypeScript'))


//Optional param
function messageOptionalParam(message:string,age?:number):any{
    return `Your message is ${message} and my age is ${age}`
}

console.log(messageOptionalParam("Learning TypeScript"))


function messageDefaultParam(message:string,age:number=20):any{
    return `Your message is ${message} and my age is ${age}`
}

console.log(messageDefaultParam("Learning TypeScript"))

//Function args

function printFruits(...fruits: string[]){
    fruits.forEach(fruit => {
        console.log(`Fruit ${fruit}`)
    });
};

console.log(printFruits('Apple','Banana','Mango','Orange'))

// Function overloading

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
   return a + b;
}

console.log(add(10,10))
console.log(add("Jhon ","Due"));

//Arrow Function
const printName = (name:string)=>{
    console.log(`Your name is ${name}`)
}

printName("Jhon Due");