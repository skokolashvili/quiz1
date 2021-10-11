class Vehicle {
    constructor (make, model) {
        this.make = make;
        this.model = model;
    }

}

class Car extends Vehicle {
    constructor(make, model) {
        super(make, model)
    }
    
}

let first = new Car('mercedes', 'c300')
console.log(first);