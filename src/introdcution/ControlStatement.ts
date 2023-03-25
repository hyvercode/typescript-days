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

//fFor loop

const colors: string[] = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}


//While loop
let _number: number = 1;
while (_number <= 10) {
  console.log(_number);
  _number++;
}

//Do While 
let i: number = 1;
do {
  console.log(i);
  i++;
} while (i <= 10)

// Break

const colors_: string[] = ["red", "green", "blue"];
for (let i = 0; i < colors_.length; i++) {
  console.log(colors_[i]);
  if (colors_[i] == "green")
        break;
}