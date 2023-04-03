class Person {
    protected firstName: string
    protected lastName: string
    private age :number;

    constructor(firstName: string, lastName: string,age :number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getPerson(): string {
        return `${this.firstName} ${this.lastName} ${this.age}`;
    }

}


let person1 = new Person("Jhon","Due",30);

console.log(`Perosn is ${person1.getPerson()}`);