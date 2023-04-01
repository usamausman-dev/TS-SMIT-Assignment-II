"use strict";
class Vehicle {
    constructor(_make, _model, _year, _rented) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._rented = _rented;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    set rented(rented) {
        this._rented = rented;
    }
    rent() {
        if (!this.rented) {
            this.rented = true;
            console.log("You have rented this");
        }
        console.log("Sorry, this is already rented.");
    }
    returnVehicle() {
        if (!this.rented) {
            console.log("Sorry, this is not currently rented.");
        }
        this.rented = false;
        console.log("Thank you for returning this");
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented) {
        super(make, model, year, rented);
    }
    rentalRate() {
        return 500;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, _payloadCapacity) {
        super(make, model, year, rented);
        this._payloadCapacity = _payloadCapacity;
    }
    rentalRate() {
        return 1000;
    }
    getPayloadCapacity() {
        return this._payloadCapacity;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, rented, _seatingCapacity) {
        super(make, model, year, rented);
        this._seatingCapacity = _seatingCapacity;
    }
    rentalRate() {
        return 300;
    }
    get seatingCapacity() {
        return this._seatingCapacity;
    }
}
// Create instances of each type of vehicle
const car = new Car("Toyota", "Corolla", 2020, true);
const truck = new Truck("Ford", "F-150", 2018, false, 1000);
const motorcycle = new Motorcycle("Honda", "CD125", 2023, true, 2);
// Test the rent() method
console.log("Attempting to rent the car...");
car.rent();
console.log(`Is the car rented? ${car.rented}`);
console.log("Attempting to rent the truck...");
truck.rent();
console.log(`Is the truck rented? ${truck.rented}`);
console.log("Attempting to rent the motorcycle...");
motorcycle.rent();
console.log(`Is the motorcycle rented? ${motorcycle.rented}`);
// Test the return() method
console.log("Returning the car...");
car.returnVehicle();
console.log(`Is the car rented? ${car.rented}`);
console.log("Returning the truck...");
truck.returnVehicle();
console.log(`Is the truck rented? ${truck.rented}`);
console.log("Returning the motorcycle...");
motorcycle.returnVehicle();
console.log(`Is the motorcycle rented? ${motorcycle.rented}`);
