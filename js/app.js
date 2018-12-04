'use-strict';

var cookieTable = document.getElementById('cookies');
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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

StoreBuilder.allStores = [];

// StoreBuilder.prototype.randomNumberCookies = function() {
//   var randomNumberCust = Math.floor( Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour );
//   console.log(Math.floor(randomNumberCust * this.avgCookiePerSale));
//   return Math.floor(randomNumberCust * this.avgCookiePerSale);
// };

StoreBuilder.prototype.render = function() {
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = this.name;
  trElement.appendChild(tdElement);
  cookieTable.appendChild(trElement);

  // for each hour, create a new td with a random number of cookies
  for(var i = 0; i < storeHours.length; i++) {
    var randomNumberCookies = Math.floor( (Math.floor( Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour )) * this.avgCookiePerSale);

    tdElement = document.createElement('td');
    tdElement.textContent = randomNumberCookies;
    trElement.appendChild(tdElement);
    this.totalCookiesPerDay += randomNumberCookies;
    this.cookieObject[storeHours[i]] = randomNumberCookies;
  }
};

StoreBuilder.renderHeader = function() {
  var headerRow = document.createElement('tr');

  for(var i = -1; i < storeHours.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = storeHours[i];
    headerRow.appendChild(thElement);
  }
  cookieTable.prepend(headerRow);
};

// StoreBuilder.renderFooter = function() {
//   var totalRow = document.createElement('tr');

//   for(var i = -1; i < storeHours.length; i++) {
//     var thElement = document.createElement('td');
//     thElement.textContent = ;
//     totalRow.appendChild(thElement);
//   }
//   cookieTable.appendChild(totalRow);
// };

var firstAndPike = new StoreBuilder('1st & Pike', 23, 65, 6.3);
var seaTacAirport = new StoreBuilder('SeaTac Airport', 3, 24, 1.2);
var seattCenter = new StoreBuilder('Seattle Center', 11, 38, 3.7);
var capitolHill = new StoreBuilder('Capitol Hill', 20, 38, 2.3);
var alki = new StoreBuilder('Alki', 2, 16, 4.6);

StoreBuilder.renderHeader();
firstAndPike.render();
seaTacAirport.render();
seattCenter.render();
capitolHill.render();
alki.render();
StoreBuilder.renderFooter();




// var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Store One Object

// var storeOne = {
//   name: '1st & Pike',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiePerSale: 6.3,
//   totalCookiesPerDay: 0,
//   cookieObject: {},

//   randomNumberCookies: function(min, max, avg) {
//     var num1 = max - min;
//     var num2 = Math.random() * num1;
//     var num3 = num2 + min;
//     var num4 = num3 * avg;
//     var num5 = Math.floor(num4);
//     return num5;
//   },
//   render: function() {
//     var ulElement = document.getElementById('store-one');

//     for(var i = 0; i < storeHours.length; i++) {
//       var liElement = document.createElement('li');
//       var numCookiesPerHour = this.randomNumberCookies(this.minCustPerHour, this.maxCustPerHour, this.avgCookiePerSale);
//       liElement.textContent = `${storeHours[i]}: ${numCookiesPerHour} cookies`;
//       ulElement.appendChild(liElement);

//       this.totalCookiesPerDay += numCookiesPerHour;
//       this.cookieObject[storeHours[i]] = numCookiesPerHour;
//     }
//     var liTotal = document.createElement('li');
//     liTotal.textContent = `Total: ${this.totalCookiesPerDay}`;
//     ulElement.appendChild(liTotal);

//     var h3Element = document.getElementById('store-one-heading');
//     h3Element.textContent = this.name;
//   },
// };

// storeOne.render();
