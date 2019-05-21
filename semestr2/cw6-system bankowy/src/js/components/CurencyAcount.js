import Acount from './Acount.js';
class CurencyAcount extends Acount {
	constructor(summary = 0, symbol) {
		super(summary);
		this.symbol = symbol;
	}
	printAcount() {
		const text = 'stan konta walutowego : ' + this.summary.toFixed(2).toString() + this.symbol;
		console.log(text);
		return text;
	}
}
export default CurencyAcount;
