import Vehicle from "./vehicle.js";
class Car extends Vehicle {
	constructor(vehicleType, color, engineType, kilometers) {
		super(vehicleType, color, engineType, kilometers);
	}
	printVehicleType() {
		super.printVehicleType();
	}
	printColor() {
		super.printColor();
	}
	printEngineType() {
		super.printEngineType();
	}
	printKilometers() {
		super.printKilometers();
	}
	generateKilometers(kilometers) {
		if (kilometers) {
			this.kilometers = kilometers;
			return kilometers;

		} else {
			return super.generateKilometers();
		}
	}
	printRed() {
		if (this.color === "czerwony")
			return `Samochód jest niezniszczalny, bo ma kolor ${this.color}`;
	}
}
export default Car;
