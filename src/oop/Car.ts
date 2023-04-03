class Car{
    private color:string;
    private type:string;

    constructor(color: string,type: string){
        this.color =color;
        this.type = type;
    }

    getColor():string{
        return this.color;
    }

    getType():string{
        return this.type;
    }

}

let bus = new Car("Red","Bus")
console.log(`Color ${bus.getColor()} and Type ${bus.getType()}`)