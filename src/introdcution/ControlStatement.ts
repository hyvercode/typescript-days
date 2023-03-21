// IF _ELSE 
let age: number;

age = 30

if (age >= 30) {
    console.log("Old Man");
} else {
    console.log("Young Man");
}

//using ternary operator

age >= 30 ? console.log("Old Man") : console.log("Young Man");

// Switch Case
let point: number;

point = 70;

switch (point) {
    case 100:
        console.log("Your grade A+");
        break;
    case 90:
        console.log("Youd grade A");
        break
    case 80:
        console.log("Youd grade B");
        break
    case 70:
        console.log("Youd grade C");
        break
    default:
        console.log("Your grade undefined");
        break;
}