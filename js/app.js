'use-strict';

var cookieTable = document.getElementById('cookies');

StoreBuilder.allStores = [];

// STORE CONSTRTUCTOR FUNCTION

function StoreBuilder(name, min, max, avg) {
  this.name = name;
  this.minCustPerHour = min;
  this.maxCustPerHour = max;
  this.avgCookiePerSale = avg;
  this.totalCookiesPerDay = 0;
  this.cookieObject = {};
  StoreBuilder.allStores.push(this);
}

StoreBuilder.prototype.render = function() {
  var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

  for(var i = 0; i < storeHours.length; i++);
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');

}














var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Store One Object
var storeOne = {
  name: '1st & Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerSale: 6.3,
  totalCookiesPerDay: 0,
  cookieObject: {},

  randomNumberCookies: function(min, max, avg) {
    var num1 = max - min;
    var num2 = Math.random() * num1;
    var num3 = num2 + min;
    var num4 = num3 * avg;
    var num5 = Math.floor(num4);
    return num5;
  },
  render: function() {
    var ulElement = document.getElementById('store-one');

    for(var i = 0; i < storeHours.length; i++) {
      var liElement = document.createElement('li');
      var numCookiesPerHour = this.randomNumberCookies(this.minCustPerHour, this.maxCustPerHour, this.avgCookiePerSale);
      liElement.textContent = `${storeHours[i]}: ${numCookiesPerHour} cookies`;
      ulElement.appendChild(liElement);

      this.totalCookiesPerDay += numCookiesPerHour;
      this.cookieObject[storeHours[i]] = numCookiesPerHour;
    }
    var liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.totalCookiesPerDay}`;
    ulElement.appendChild(liTotal);

    var h3Element = document.getElementById('store-one-heading');
    h3Element.textContent = this.name;
  },
};