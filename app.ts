abstract class Vehicle {
    constructor(
        private _make: string,
        private _model: string,
        private _year: number,
        private _rented: boolean) { }

    get make(): string {
        return this._make
    }

    get model(): string {
        return this._model
    }

    get year(): number {
        return this._year
    }

    get rented(): boolean {
        return this._rented
    }

    set rented(rented: boolean) {
        this._rented = rented
    }

    public abstract rentalRate(): number;


    public rent(): void {
        if (!this.rented) {
            this.rented = true;
            console.log("You have rented this");
        }

        console.log("Sorry, this is already rented.");
    }


    public returnVehicle(): void {
        if (!this.rented) {
            console.log("Sorry, this is not currently rented.");
        }

        this.rented = false;
        console.log("Thank you for returning this");
    }

}

class Car extends Vehicle {
    constructor(make: string, model: string, year: number, rented: boolean) {
        super(make, model, year, rented);
    }

    public rentalRate(): number {
        return 500;
    }
}

class Truck extends Vehicle {

    constructor(make: string, model: string, year: number, rented: boolean, private _payloadCapacity: number) {
        super(make, model, year, rented);
    }

    public rentalRate(): number {
        return 1000;
    }

    public getPayloadCapacity(): number {
        return this._payloadCapacity;
    }
}

class Motorcycle extends Vehicle {
    constructor(make: string, model: string, year: number, rented: boolean, private _seatingCapacity: number) {
        super(make, model, year, rented);
    }
    public rentalRate(): number {
        return 300;
    }

    get seatingCapacity(): number {
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
