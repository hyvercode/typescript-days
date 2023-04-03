// Sample class Animal
class Animal {
    name:string;
    foot:number;

    constructor(name: string,foot:number){
        this.name = name;
        this.foot = foot;
    }

    printAnimal(){
        console.log(`Animal name ${this.name} number of animal legs ${this.foot}`)
    }
}

let tiger = new Animal("Tiger",4);

tiger.printAnimal();

let chicken = new Animal("Chicken",2);

chicken.printAnimal();