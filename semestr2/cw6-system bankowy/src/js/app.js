import Acount from "./components/Acount.js";
import Bank from "./components/Bank.js";
import Company from "./components/Company.js";
import Person from "./components/Person.js";
import AcountVip from "./components/AcountVip.js";
import CurencyAcount from "./components/CurencyAcount";

// const DataJs = document.querySelector('[data-js="js"]');
// const elementVehicel = document.createElement("div");
// const elementMotorbike = document.createElement("div");
// // let buttonEle = document.querySelectorAll('button');
// // console.log(buttonEle);

// const VehicleTest = new Vehicle("samochód", "czerwony", "benzynowy");
// VehicleTest.generateKilometers();
// DataJs.appendChild(
// 	elementVehicel
// ).innerHTML = `<p>${VehicleTest.printVehicleType()}</br>${VehicleTest.printColor()}<br>${VehicleTest.printEngineType()}<br>${VehicleTest.printKilometers()}</p>`;
// elementVehicel.classList.add("vehicle");
// addButton(".vehicle");
// // VehicleTest.printVehicleType();
// // VehicleTest.printColor();
// // VehicleTest.printEngineType();
// // VehicleTest.printKilometers();
// const Motor = new Motorbike("motor", "niebieski");
// Motor.generateKilometers();
// DataJs.appendChild(
// 	elementMotorbike
// ).innerHTML = `<p>${Motor.printVehicleType()}</br>${Motor.printColor()}<br>${Motor.printEngineType()}<br>${Motor.printKilometers()}<br>${Motor.PrintMotor()}</p>`;
// elementMotorbike.classList.add("motorbike");
// addButton(".motorbike");

// Motor.printVehicleType();
// Motor.printEngineType();

// Motor.printKilometers();
// Motor.printColor();
// Motor.PrintMotor();
// const Carr = new Car("samochód", "czerwony", "diesel");
// Carr.printVehicleType();
// Carr.printEngineType();
// Carr.generateKilometers();
// Carr.printKilometers();
// Carr.printColor();
// Carr.printRed();
// const Garage1 = new Garage();
// Garage1.add(VehicleTest);
// Garage1.add(Motor);
// let buttonEle = document.querySelectorAll("button");

// function addButton(ele) {
// 	const elButton = document.createElement("button");
// 	document.querySelector(ele).appendChild(elButton);
// 	elButton.textContent = "usun pojazd";
// }
// buttonEle.forEach(function (item) {
// 	item.addEventListener("click", function () {
// 		this.parentElement.remove(this.parentElement);
// 		Garage1.remove(item);
// 	});
// });
// const ac = new Acount(1000);
// ac.printAcount();
// ac.deposit(1000);
// ac.deposit(2000.5698);
// ac.printAcount();
// const vip = new AcountVip(0, 3);
// vip.deposit(100);
// vip.printAcount();
// vip.withdraw(10);
// vip.printAcount();
// const curA = new CurencyAcount(0, '$')
// curA.deposit(300);
// curA.printAcount();
const Bankk = new Bank();
// klienci:
const cPerson1 = new Person('klient', '1');
const cPerson2 = new Person('klient', '2');
const cPerson3 = new Person('klient', '3');
const cCompany1 = new Company('firma', '1');
const cCompany2 = new Company('firma', '2');
const cCompany3 = new Company('firma', '3');
// konta:
const acount1 = new Acount(0);
const acount2 = new Acount(0);
const acount3 = new Acount(0);
const acountVip1 = new AcountVip(0, 2);
const acountVip2 = new AcountVip(0, 2);
const acountVip3 = new AcountVip(0, 2);
const acountCurency1 = new CurencyAcount(0, "$");
const acountCurency2 = new CurencyAcount(0, "€");
const acountCurency3 = new CurencyAcount(0, "€");
// operacje dodadnie klientów do banku:
Bankk.add(cPerson1);
Bankk.add(cPerson2);
Bankk.add(cPerson3);
Bankk.add(cCompany1);
Bankk.add(cCompany2);
Bankk.add(cCompany3);
// dodanie kont do klientów
cPerson1.addAcount(acount1);
cPerson1.addAcount(acountCurency1);
cPerson2.addAcount(acountVip2);
cPerson3.addAcount(acountCurency3);
cCompany1.addAcount(acount2);
cCompany2.addAcount(acount3);
cCompany2.addAcount(acountVip1);
cCompany3.addAcount(acountVip3);
cCompany3.addAcount(acountCurency2);
// operacje:
// wplac po 100 na normalne konta:
acount1.deposit(100);
acount2.deposit(100);
acount2.deposit(100);
// console.log(Bankk.listClient);
Bankk.print();
