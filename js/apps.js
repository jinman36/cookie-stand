'use strict';

console.log('hello world');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];






// Object literal - Seattle
let seattle = {
  storeName: 'Seattle',
  minCustomersHour: 23,
  maxCustomersHour: 65,
  avgCookiesCustomer: 6.3,
  customersPerHour: [],
  dailyTotal: 0,


  randomCustomerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1) + this.minCustomersHour);
  },
  
  // console.log('random customer hour');
  calculateSalesByHour() {
    for (let i = 0; i < hours.length; i++) {
    let totalPerHour = Math.ceil(this.randomCustomerHour() * this.avgCookiesCustomer);
    this.customersPerHour[i] = totalPerHour;
    this.dailyTotal += totalPerHour;
  }
  // let randomCustomerForOneHour = this.randomCustomerHour();
  // console.log(randomCustomerForOneHour);
},


  //   render: function () {
  //     this.calculateSalesByHour();
  // for (let i = 0; i < this.customersPerHour.length; i++) {
  //   let li = document.createElement('li');
  //   li.textContent = `${customersPerHour}`;
  //   // this.calculateSalesByHour();
  //   // console.log('render method');
  //   // }

  // }
  // }

  seattle.render();


// let tokyo = { 
//   name: 'Tokyo',
//   main: 3,
//   max: 24,
//   avg: 1.2,
//   total: 0,
// };

// let dubai = {
//   name: 'Dubai',
//   main: 11,
//   max: 38,
//   avg: 3.7,
//   total: 0,
// };

// let paris = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   total: 0,
// };

// let lima = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   total: 0,
// };