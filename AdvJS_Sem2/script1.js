'use strict';

// class Bank {
//   #_balance = 0;
//   // constructor(name){
//   //   this.name = name;
//   // }

//   get balance(){
//     return this.#_balance;
//   }

//   // set balance(value){
//   //   this.#_balance = value;
//   // }

//   deposit(amount){
//     if (amount <= 0){
//       console.log('incorrect value');
//     } else {
//       this.#_balance += amount;
//       return this.#_balance;
//     }
//   }

//   withdraw(amount){
//     if (amount <= 0){
//       console.log('incorrect value');
//     } else if (amount > this.#_balance){
//       console.log('not enough money');
//     } else {
//       this.#_balance -= amount;
//       return this.#_balance;
//     }
//   } 
// }

// // const bank1 = new Bank('Bank Moshennik');
// const bank1 = new Bank();
// // bank1.balance = 1000;

// // console.log(bank1.balance);

// bank1.deposit(1000);  
// console.log(bank1.balance);

// bank1.withdraw(100);
// console.log(bank1.balance);

// ----------------------------------------------------------------

// class User {
//   #_name;
//   #_surname;

//   constructor(name, surname){
//     this.#_name = this.name;
//     this.#_surname = this.surname;
//   } 

//   get name() {
//     return this.#_name;
//   }
//   set name(value) {
//     this.#_name = value;
//   }

//   get surname() {
//     return this.#_surname;
//   }
//   set surname(value) {
//     this.#_surname = value;
//   }
// };

// class PremiumUser extends User {
//   #_premiumAccount = null;

//   get premiumAccount() {
//     return this.#_premiumAccount;
//   }
//   // set premiumAccount(value) {
//   //   this.#_premiumAccount = value;
//   // }
//   setPremium(){
//     this.#_premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
//   };
// };

// class RegularUser extends User {

// };

// const user1 = new PremiumUser();
// user1.name = 'Lola';
// user1.surname = 'Ivanova';
// user1.setPremium();

// const user2 = new RegularUser();
// user2.name = 'Jack';
// user2.surname = 'Black';

// const user3 = {
//   name: 'John',
//   surname: 'Smackster',
//   premiumAccount: new Date().setFullYear(new Date().getFullYear() + 2)
// }
// user3.typeof = new PremiumUser();

// const user4 = new PremiumUser();
// user4.name = 'Pila';
// user4.surname = 'Milokko';

// const getAccountInfo = (user) => {
//   const name = user.name;
//   const surname = user.surname; 
//   let premium = new Date(user?.premiumAccount).getFullYear();
//   if (premium === 1970) {
//     premium = '0';
//   }
//   if (user instanceof PremiumUser){
//     console.log(`Name: ${name}.\nSurname: ${surname}.\nPremium account: ${premium}.`);
//   } else if (user instanceof RegularUser){
//     console.log(`Name: ${name}.\nSurname: ${surname}.`);
//   } else {
//     console.log('Unknown user type!');
//     console.log(`Name: ${name}.\nSurname: ${surname}.\nPremium account: ${premium}.`);
//   }
// }

// getAccountInfo(user1);
// getAccountInfo(user2);
// getAccountInfo(user3);
// getAccountInfo(user4);

// ----------------------------------------------------------------

const tester = document.querySelector('div.tester');

const field = document.createElement('input');
const btn = document.createElement('button');
btn.innerHTML = 'TEST';

const res = document.createElement('p');
res.innerHTML = 'Your result';

tester.appendChild(field);
tester.appendChild(btn);
tester.appendChild(res);

btn.addEventListener('click', function(e) {
  if (!field.value){
    res.innerHTML = 'Empty field';
    res.style.color ='red';
  } 
  else {
    try {
      if (!isNaN(field.value)){
        res.style.color = 'green';
        res.innerHTML = `Result: ${field.value} is a number`; 
      } 
      // else {
      //   res.style.color ='red';
      //   res.innerHTML = `Result: ${field.value} is not a number`;
      // }
    } catch (error) {
      res.textContent = error.message;
      console.log(error.message);
    }
  }
});





