'use strict';

console.log('hello world');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattleList = document.getElementById('seattle');




// Object literal - Seattle
let seattle = {
  storeName: 'Seattle',
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
      seattleList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    seattleList.appendChild(li);
  }

};

seattle.render();
