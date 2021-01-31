'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookieTable = document.getElementById('table');
let tableHeader = document.getElementById('header');
let tableFooter = document.getElementById('footer');
let totalCookieStands = [];
// console.log(cookieTable);

// var seattleList = document.getElementById('seattle');
// var tokyoList = document.getElementById('tokyo');
// var dubaiList = document.getElementById('dubai');
// var parisList = document.getElementById('paris');
// var limaList = document.getElementById('lima');


// Constructor:
function CookieStand(storeName, minCustomersHour, maxCustomersHour, avgCookiesCustomer) {
  this.storeName = storeName;
  this.minCustomersHour = minCustomersHour;
  this.maxCustomersHour = maxCustomersHour;
  this.avgCookiesCustomer = avgCookiesCustomer;
  this.HourlySales = [];
  this.dailyTotal = 0;
  totalCookieStands.push(this);
}

CookieStand.prototype.randomCustomersPerHour = function () {
  return Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1) + this.minCustomersHour);
};

CookieStand.prototype.calculateSalesByHour = function () {
  for (let i = 0; i < hours.length; i++) {
    // let randomCust = this.randomCustomersPerHour();
    let hourlyTotal = Math.floor(this.randomCustomersPerHour * this.avgCookiesCustomer);
    this.HourlySales[i] = hourlyTotal;
    this.dailyTotal += hourlyTotal;

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

  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1) + this.minCustomersHour);
  },

  calculateSalesByHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomCust = this.randomCustomersPerHour();
      let hourlyTotal = Math.floor(randomCust * this.avgCookiesCustomer);
      this.cookiesPerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }

  },

  render: function () {
    this.calculateSalesByHour();
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


CookieStand.prototype.render = function () {
  this.calculateSalesByHour();
  let tableRowElement = document.createElement('tr');
  cookieTable.appendChild(tableRowElement);
  let tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = this.storeName;
  tableRowElement.appendChild(tableHeaderElement);

  for (let i = 0; i < this.HourlySales.length; i++) {
    let tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.HourlySales[i];
    tableRowElement.appendChild(tableDataElement);

let dubai = {
  storeName: 'Dubai',
  minCustomersHour: 23,
  maxCustomersHour: 65,
  avgCookiesCustomer: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1) + this.minCustomersHour);
  },

  calculateSalesByHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomCust = this.randomCustomersPerHour();
      let hourlyTotal = Math.floor(randomCust * this.avgCookiesCustomer);
      this.cookiesPerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }

  },

  render: function () {
    this.calculateSalesByHour();
    for (let i = 0; i < this.cookiesPerHourArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]}`;
      dubaiList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    dubaiList.appendChild(li);

  }
  tableDataElement = document.createElement('td');
  tableDataElement.textContent = this.dailyTotal;
  tableRowElement.appendChild(tableDataElement);
  console.log(tableDataElement);
};


function renderHeader() {
  let tableRowElement = document.createElement('tr');
  tableHeader.appendChild(tableRowElement);
  let tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'CookieStands';
  tableRowElement.appendChild(tableHeaderElement);
  for (let i = 0; i < hours.length; i++) {
    tableHeaderElement = document.createElement('th');
    tableHeaderElement.textContent = hours[i];
    tableRowElement.appendChild(tableHeaderElement);

let paris = {
  storeName: 'Paris',
  minCustomersHour: 23,
  maxCustomersHour: 65,
  avgCookiesCustomer: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1) + this.minCustomersHour);
  },

  calculateSalesByHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomCust = this.randomCustomersPerHour();
      let hourlyTotal = Math.floor(randomCust * this.avgCookiesCustomer);
      this.cookiesPerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }

  },

  render: function () {
    this.calculateSalesByHour();
    for (let i = 0; i < this.cookiesPerHourArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]}`;
      parisList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    parisList.appendChild(li);
   
  }
  tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'Daily Location Totals';
  tableRowElement.appendChild(tableHeaderElement);
}


// function renderFooter() {
//   let tableRowElement = document.createElement('tr');
//   tableFooter.appendChild(tableRowElement);
//   let tableHeaderElement = document.createElement('th');
//   tableHeaderElement.textContent = 'Totals';
//   tableRowElement.appendChild(tableHeaderElement);
  // for (let i = 0; i < hours.length; i++) {
    // let allStoresHourlyTotal = 0;
    // for (let j = 0; j < totalCookieStands.length; j++) {
      // allStoresHourlyTotal += totalCookieStands[j].HourlySales[i];
    // }
    // let tableDataElement = document.createElement('td');
    // tableDataElement.textContent = allStoresHourlyTotal;
    // tableRowElement.appendChild(tableDataElement);
    // allStoresDailyTotal += allStoresHourlyTotal;
  // }
  // tableHeaderElement = document.createElement('td');
  // tableHeaderElement.textContent = allStoresDailyTotal;
  // tableRowElement.appendChild(tableDataElement);
// }


new CookieStand('Seattle', 23, 65, 6.3);
// new CookieStand('Tokyo', 3, 24, 1.2);
// new CookieStand('Dubai', 11, 38, 3.7);
// new CookieStand('Paris', 20, 38, 2.3);
// new CookieStand('Lima', 2, 16, 4.6);


// function renderAll() {
//   for (let i = 0; i < totalCookieStands.length; i++) {
//     totalCookieStands[i].render();
//   }
// }

// renderAll();
renderHeader();
// renderFooter();
};

let lima = {
  storeName: 'Lima',
  minCustomersHour: 23,
  maxCustomersHour: 65,
  avgCookiesCustomer: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  randomCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1) + this.minCustomersHour);
  },

  calculateSalesByHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomCust = this.randomCustomersPerHour();
      let hourlyTotal = Math.floor(randomCust * this.avgCookiesCustomer);
      this.cookiesPerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }

  },

  render: function () {
    this.calculateSalesByHour();
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

