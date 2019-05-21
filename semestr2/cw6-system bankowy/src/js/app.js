import Acount from "./components/Acount.js";
import Bank from "./components/Bank.js";
import Company from "./components/Company.js";
import Person from "./components/Person.js";
import AcountVip from "./components/AcountVip.js";
import CurencyAcount from "./components/CurencyAcount";
const Bankk = new Bank();
// klienci:
const cPerson1 = new Person('klient', '1');
const cPerson2 = new Person('klient', '2');
const cPerson3 = new Person('klient', '3');
const cCompany1 = new Company('firma', '1');
const cCompany2 = new Company('firma', '2');
const cCompany3 = new Company('firma', '3');
// konta:
const acount1 = new Acount(0);
const acount2 = new Acount(0);
const acount3 = new Acount(0);
const acountVip1 = new AcountVip(0, 2);
const acountVip2 = new AcountVip(0, 2);
const acountVip3 = new AcountVip(0, 2);
const acountCurency1 = new CurencyAcount(0, "$");
const acountCurency2 = new CurencyAcount(0, "€");
const acountCurency3 = new CurencyAcount(0, "€");
// operacje dodadnie klientów do banku:
Bankk.add(cPerson1);
Bankk.add(cPerson2);
Bankk.add(cPerson3);
Bankk.add(cCompany1);
Bankk.add(cCompany2);
Bankk.add(cCompany3);
// dodanie kont do klientów
cPerson1.addAcount(acount1);
cPerson1.addAcount(acountCurency1);
cPerson2.addAcount(acountVip2);
cPerson3.addAcount(acountCurency3);
cCompany1.addAcount(acount2);
cCompany2.addAcount(acount3);
cCompany2.addAcount(acountVip1);
cCompany3.addAcount(acountVip3);
cCompany3.addAcount(acountCurency2);
// operacje:
// wplac losow sume na kazde konto:
console.log('wplata po 200 na kazde konto')
acount1.deposit(200);
acountCurency1.deposit(200);
acountVip2.deposit(200);
acountCurency3.deposit(200);
acount2.deposit(200);
acount3.deposit(200);
acountVip1.deposit(200);
acountVip3.deposit(200);
acountCurency2.deposit(200);
Bankk.print();
// wplac po 100 na normalne konta:
console.log('wplata po 100 na zwykłe pierwsze konta osoby')
acount1.deposit(100);
acount2.deposit(100);
acount2.deposit(100);
Bankk.print();
// wpłać 50 na każde konto VIP
console.log('wpłać 50 na każde konto VIP');
acountVip1.deposit(50);
acountVip2.deposit(50);
acountVip3.deposit(50);
Bankk.print();
console.log('wypłać 25 z kont walutowych prowadzonych w Euro');
acountCurency2.withdraw(25);
acountCurency3.withdraw(25);
Bankk.print();
console.log('wypłać 200 z VIPowych kont każdej Firmy, o ile stan tego konta wynosi co najmniej 200');
acountVip1.withdraw(200);
acountVip3.withdraw(200);
Bankk.print();
