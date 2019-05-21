class Bank {
	constructor(name = 'Mbank') {
		this.name = name;
		this.listClient = [];
	}
	add(client) {
		this.listClient.push(client);
	}
	print() {
		console.log('witaj w ' + this.name)
		console.log('lista klientów: ');
		this.listClient.forEach(function (item) {
			item.printClient();
			console.log("____________________________________")
		})
	}

}
export default Bank;
