'use strict';


let cookieTable = document.getElementById('table');
let tableHeader = document.getElementById('header');
let tableFooter = document.getElementById('footer');
let totalCookieStands = [];
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
  this.cookiesSoldArray = [];
  this.dailyTotal = 0;
  totalCookieStands.push(this);
}

CookieStand.prototype.randomCustomersPerHour = function () {
  return Math.floor(Math.random() * (this.maxCustomersHour - this.minCustomersHour + 1) + this.minCustomersHour);
};

CookieStand.prototype.calculateSalesByHour = function () {
  for (let i = 0; i < hours.length; i++) {
    // let randomCust = this.randomCustomersPerHour();
    // let hourlyTotal = Math.ceil(this.randomCustomersPerHour * this.avgCookiesCustomer);
    // this.cookiesSoldArray[i] = hourlyTotal;
    this.cookiesSoldArray.push(Math.ceil(this.randomCustomersPerHour * this.avgCookiesCustomer));
    this.dailyTotal = this.dailyTotal + this.cookiesSoldArray[i];
  }
};

CookieStand.prototype.render = function () {
  this.calculateSalesByHour();
  let tr = document.createElement('tr');
  cookieTable.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = this.storeName;
  tr.appendChild(th);

  for (let i = 0; i < this.cookiesSoldArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesSoldArray[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
};

function renderHeader() {
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = 'CookieStands';
  th.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = hours[i];
    tr.appendChild(td);
  }

  let td = document.createElement('td');
  td.textContent = 'Daily Location Totals';
  tr.appendChild(td);
  tableHeader.appendChild(tr);
}

function getGrandTotals() {
  let grandTotals = new Array(hours.length + 1);
  grandTotals.fill(0);
  for (let i = 0; i < totalCookieStands.length; i++ ) {

    for (let j = 0; j < totalCookieStands[i].cookiesSoldArray.length; j++);
    grandTotals[j] += totalCookieStands[i].cookiesSoldArray[j];
    grandtotals[grandTotals.length - 1] += totalCookieStands[i].cookiesSoldArray[j];
  }
}


function renderFooter() {
  let grandTotals = getGrandTotals();
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = 'Totals';
  tr.appendChild(th);
  for (let i = 0; i < hours.length; i++){
    let td = document.createElement('td');
    td.textContent = grandTotals[i];
    tr.appendChild(td);
  }
  tableFooter.appendChild(tr);
}

new CookieStand('Seattle', 23, 65, 6.3);
new CookieStand('Tokyo', 3, 24, 1.2);
new CookieStand('Dubai', 11, 38, 3.7);
new CookieStand('Paris', 20, 38, 2.3);
new CookieStand('Lima', 2, 16, 4.6);


function renderAll() {
  for (let i = 0; i < totalCookieStands.length; i++) {
    totalCookieStands[i].render();
  }
}

renderAll();
renderHeader();
renderFooter();