class Company {
	constructor(name = "", regon = "") {
		this.name = name;
		this.regon = regon;
		this.acountLis = [];
	}
	addAcount(acount) {
		this.acountLis.push(acount)
	}
}
export default Company;
