class Company {
	constructor(name = "", regon = "") {
		this.name = name;
		this.regon = regon;
		this.acountLis = [];
	}
	addAcount(acount) {
		this.acountLis.push(acount)
	}
	printClient() {
		console.log('imię: ' + this.name);
		console.log('Regon: ' + this.regon);
		this.acountLis.forEach(function (item) {
			item.printAcount();
		})
	}
}
export default Company;
