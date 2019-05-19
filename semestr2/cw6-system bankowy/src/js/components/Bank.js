class Bank {
	constructor(name='Mbank',listClient) {
	 this.name=name;
this.listClient=[];
	}
	add(client){
this.listClient.push(client);
	}

}
export default Bank;
