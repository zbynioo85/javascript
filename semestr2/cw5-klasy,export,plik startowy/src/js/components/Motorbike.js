import Vehicle from "./vehicle.js";

class Motorbike extends Vehicle {
	constructor(vehicleType, color, engineType = 'benzynowy', kilometers = 0) {
		super(vehicleType, color, engineType, kilometers);

	}
	printVehicleType() {
		return super.printVehicleType();
	}
	printColor() {
		return super.printColor();
	}
	printEngineType() {
		return super.printEngineType();
	}
	printKilometers() {
		return super.printKilometers();
	}
	generateKilometers() {
		super.generateKilometers();
	}
	PrintMotor() {
		return 'Pojazd jest jednosladem'
	}
}
export default Motorbike;
