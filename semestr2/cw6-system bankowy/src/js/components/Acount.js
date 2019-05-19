import Client from'./Client.js';
class Acount extends Client{
constructor(summary){
    super();
    this.summary=summary;
}
deposit(number){
    this.summary+=number;
}
withdraw(number){
    this.summary-=number;
}
printAcount(){
  this.summary.toString();
    console.log(this.summary.toString());
}
}
export default Acount;