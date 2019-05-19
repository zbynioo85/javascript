import Client from"./Client.js";
class Company extends Client{
constructor(name="",regon=""){
    this.name=name;
    this.regon=regon;
}
}
export default Company;