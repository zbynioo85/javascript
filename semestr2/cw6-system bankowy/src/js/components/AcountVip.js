import Acount from './Acount.js';
class AcountVip extends Acount {
	constructor(summary = 0, commision) {
		super(summary);
		this.commision = commision;
	}
	deposit(number) {

		return this.summary = super.deposit(number) - this.commision
	}
	withdraw(number) {
		return this.summary = super.deposit(number) - this.commision;
	}
	printAcount() {
		const text = 'stan konta VIP : ' + this.summary.toFixed(2).toString();
		console.log(text);
		return text;
	}
}
export default AcountVip;
