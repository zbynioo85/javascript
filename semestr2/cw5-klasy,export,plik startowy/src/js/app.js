import Log from "./components/m-log.js";
import Vehicle from "./components/Vehicle.js";
import Motorbike from "./components/Motorbike.js";
import Car from "./components/Car.js";
import Garage from "./components/garage.js";

const DataJs = document.querySelector('[data-js="js"]');
const elementVehicel = document.createElement("div");
const elementMotorbike = document.createElement("div");
// let buttonEle = document.querySelectorAll('button');
// console.log(buttonEle);

const VehicleTest = new Vehicle("samochód", "czerwony", "benzynowy");
VehicleTest.generateKilometers();
DataJs.appendChild(
	elementVehicel
).innerHTML = `<p>${VehicleTest.printVehicleType()}</br>${VehicleTest.printColor()}<br>${VehicleTest.printEngineType()}<br>${VehicleTest.printKilometers()}</p>`;
elementVehicel.classList.add("vehicle");
addButton(".vehicle");
// VehicleTest.printVehicleType();
// VehicleTest.printColor();
// VehicleTest.printEngineType();
// VehicleTest.printKilometers();
const Motor = new Motorbike("motor", "niebieski");
Motor.generateKilometers();
DataJs.appendChild(
	elementMotorbike
).innerHTML = `<p>${Motor.printVehicleType()}</br>${Motor.printColor()}<br>${Motor.printEngineType()}<br>${Motor.printKilometers()}<br>${Motor.PrintMotor()}</p>`;
elementMotorbike.classList.add("motorbike");
addButton(".motorbike");

Motor.printVehicleType();
Motor.printEngineType();

Motor.printKilometers();
Motor.printColor();
Motor.PrintMotor();
const Carr = new Car("samochód", "czerwony", "diesel");
Carr.printVehicleType();
Carr.printEngineType();
Carr.generateKilometers();
Carr.printKilometers();
Carr.printColor();
Carr.printRed();
const Garage1 = new Garage();
Garage1.add(VehicleTest);
Garage1.add(Motor);
let buttonEle = document.querySelectorAll("button");

function addButton(ele) {
	const elButton = document.createElement("button");
	document.querySelector(ele).appendChild(elButton);
	elButton.textContent = "usun pojazd";
}
buttonEle.forEach(function (item) {
	item.addEventListener("click", function () {
		this.parentElement.remove(this.parentElement);
		Garage1.remove(item);
	});
});
