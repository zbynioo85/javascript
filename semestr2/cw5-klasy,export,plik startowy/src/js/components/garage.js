class Garage {
	constructor() {
		this.list = "Lista pojazdów:";
		this.tab = [];
	}
	add(item) {
		this.tab.push(item);
		console.log(this.tab);
	}
	remove(item) {
		// let position = this.tab.indexOf(item);
		this.tab.splice(item, 1);
		// console.log(this.tab, item);
	}
}

export default Garage;
