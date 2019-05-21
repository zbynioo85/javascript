class Acount {
	constructor(summary = 0) {
		this.summary = summary;
	}
	deposit(number) {
		return this.summary += number;
	}
	withdraw(number) {
		return this.summary -= number;
	}
	printAcount() {
		const text = 'stan konta standard : ' + this.summary.toFixed(2).toString();
		console.log(text);
		return text;
	}
}
export default Acount;
