class Vehicle {
	constructor(vehicleType, color, engineType, kilometers = 0) {
		this.vehicleType = vehicleType;
		this.color = color;
		this.engineType = engineType;
		this.kilometers = kilometers;
	}
	printVehicleType() {
		this.vehicleType = `pojazd typu: ${this.vehicleType}`;
		return this.vehicleType;
	}
	printColor() {
		this.color = `Kolor pojazdu to: ${this.color}`;
		return this.color;
	}
	printEngineType() {
		if (this.engineType === 'ekologiczny') {
			const text = `${this.engineType} jest ekologiczny.`;
			this.engineType = text;
			return text;
		} else if (this.engineType === 'benzynowy' || this.engineType === 'diesel') {
			const text = `${this.engineType} jest nie-ekologiczny. Elon Musk nie jest zadowolony z Twojego wyboru.`;
			this.engineType = text;
			return text;
		}
	}

	generateKilometers() {
		let randomNumber = null;
		do {
			randomNumber = Math.floor((Math.random() * 9000) + 1000);
		}
		while (randomNumber % 100 != 0);
		if (randomNumber > 2500) {
			return randomNumber + 'km';
		} else {
			randomNumber = 'Silnik jest niedotarty';
			return randomNumber;
		}

	}
	printKilometers() {
		const text = `Stan licznika to: ${this.generateKilometers()}`;
		this.kilometers = text;
		return text;
	}

}
export default Vehicle;
