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