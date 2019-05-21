class Person {
	constructor(name = "", surname = "") {
		this.name = name;
		this.surname = surname;
		this.acountLis = [];
	}
	addAcount(acount) {
		this.acountLis.push(acount)
	}
	printClient() {
		console.log('imię: ' + this.name);
		console.log('nazwisko: ' + this.surname);
		this.acountLis.forEach(function (item) {
			item.printAcount();
		})
	}
}
export default Person;
