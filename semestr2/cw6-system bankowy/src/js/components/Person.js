import Client from "./Client.js";
class Person extends Client{
constructor(name="",surname=""){
    this.name=name;
    this.surname=surname;
}
}
export default Person;