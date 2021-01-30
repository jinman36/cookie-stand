'use strict';

console.log('hello world');

let myContainer = document.getElementById('container');
let cookieTable = document.getElementById('cookieTable');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattleList = document.getElementById('seattle');
var tokyoList = document.getElementById('tokyo');
var dubaiList = document.getElementById('dubai');
var parisList = document.getElementById('paris');
var limaList = document.getElementById('lima');



// Object literal - Seattle
let seattle = {
  storeName: 'Seattle',
  minCustomersHour: 23,
  maxCustomersHour: 65,
  avgCookiesCustomer: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  // get random number of customers for an hour
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1) + this.minCustomersHour);
  },

  // console.log('random customer hour');

  // calculate number of cookies per hour
  calculateSalesByHour: function () {
    // this.randomCustomersPerHour();
    for (let i = 0; i < hours.length; i++) {
      let randomCust = this.randomCustomersPerHour();
      let hourlyTotal = Math.floor(randomCust * this.avgCookiesCustomer);
      this.cookiesPerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
    // console.log(this.cookiesPerHourArray);
    // let randomCustomerForOneHour = this.randomCustomerHour();
  },


  render: function () {
    this.calculateSalesByHour();
    // console.log(cookiesPerHour[i]);
    // console.log(this.avgCookiesCustomer);
    for (let i = 0; i < this.cookiesPerHourArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]}`;
      seattleList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    seattleList.appendChild(li);
  }

};

let tokyo = {
  storeName: 'Tokyo',
  minCustomersHour: 3,
  maxCustomersHour: 24,
  avgCookiesCustomer: 1.2,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  // get randon number of customers for an hour
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1) + this.minCustomersHour);
  },

  // console.log('random customer hour');

  // calculate number of cookies per hour
  calculateSalesByHour: function () {
    // this.randomCustomersPerHour();
    for (let i = 0; i < hours.length; i++) {
      let randomCust = this.randomCustomersPerHour();
      let hourlyTotal = Math.floor(randomCust * this.avgCookiesCustomer);
      this.cookiesPerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
    // console.log(this.cookiesPerHourArray);
    // let randomCustomerForOneHour = this.randomCustomerHour();
  },


  render: function () {
    this.calculateSalesByHour();
    // console.log(cookiesPerHour[i]);
    // console.log(this.avgCookiesCustomer);
    for (let i = 0; i < this.cookiesPerHourArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]}`;
      tokyoList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    tokyoList.appendChild(li);
  }

};

let dubai = {
  storeName: 'Dubai',
  minCustomersHour: 23,
  maxCustomersHour: 65,
  avgCookiesCustomer: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  // get randon number of customers for an hour
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1) + this.minCustomersHour);
  },

  // console.log('random customer hour');

  // calculate number of cookies per hour
  calculateSalesByHour: function () {
    // this.randomCustomersPerHour();
    for (let i = 0; i < hours.length; i++) {
      let randomCust = this.randomCustomersPerHour();
      let hourlyTotal = Math.floor(randomCust * this.avgCookiesCustomer);
      this.cookiesPerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
    // console.log(this.cookiesPerHourArray);
    // let randomCustomerForOneHour = this.randomCustomerHour();
  },


  render: function () {
    this.calculateSalesByHour();
    // console.log(cookiesPerHour[i]);
    // console.log(this.avgCookiesCustomer);
    for (let i = 0; i < this.cookiesPerHourArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]}`;
      dubaiList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    dubaiList.appendChild(li);
  }

};

let paris = {
  storeName: 'Paris',
  minCustomersHour: 23,
  maxCustomersHour: 65,
  avgCookiesCustomer: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  // get randon number of customers for an hour
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1) + this.minCustomersHour);
  },

  // console.log('random customer hour');

  // calculate number of cookies per hour
  calculateSalesByHour: function () {
    // this.randomCustomersPerHour();
    for (let i = 0; i < hours.length; i++) {
      let randomCust = this.randomCustomersPerHour();
      let hourlyTotal = Math.floor(randomCust * this.avgCookiesCustomer);
      this.cookiesPerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
    // console.log(this.cookiesPerHourArray);
    // let randomCustomerForOneHour = this.randomCustomerHour();
  },


  render: function () {
    this.calculateSalesByHour();
    // console.log(cookiesPerHour[i]);
    // console.log(this.avgCookiesCustomer);
    for (let i = 0; i < this.cookiesPerHourArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]}`;
      parisList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    parisList.appendChild(li);
  }

};

let lima = {
  storeName: 'Lima',
  minCustomersHour: 23,
  maxCustomersHour: 65,
  avgCookiesCustomer: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  // get randon number of customers for an hour
  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1) + this.minCustomersHour);
  },

  // console.log('random customer hour');

  // calculate number of cookies per hour
  calculateSalesByHour: function () {
    // this.randomCustomersPerHour();
    for (let i = 0; i < hours.length; i++) {
      let randomCust = this.randomCustomersPerHour();
      let hourlyTotal = Math.floor(randomCust * this.avgCookiesCustomer);
      this.cookiesPerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
    // console.log(this.cookiesPerHourArray);
    // let randomCustomerForOneHour = this.randomCustomerHour();
  },


  render: function () {
    this.calculateSalesByHour();
    // console.log(cookiesPerHour[i]);
    // console.log(this.avgCookiesCustomer);
    for (let i = 0; i < this.cookiesPerHourArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]}`;
      limaList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    limaList.appendChild(li);
  }

};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();