class Bank {
	constructor(name = 'Mbank') {
		this.name = name;
		this.listClient = [];
	}
	add(client) {
		this.listClient.push(client);
	}
	print() {
		this.listClient.forEach(function (item) {
			console.log(item);
			console.log(item.name);
			console.log(item.surname,item.regon);
			// item.acountLis.forEach(function (item2) {
			// 	console.log(item2.printAcount());
			// })
			// item.acountLis[0].printAcount();
		})
	}

}
export default Bank;
