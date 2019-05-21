class Person {
	constructor(name = "", surname = "") {
		this.name = name;
		this.surname = surname;
		this.acountLis = [];
	}
	addAcount(acount) {
		this.acountLis.push(acount)
	}
}
export default Person;
