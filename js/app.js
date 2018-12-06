'use-strict';

var cookieTable = document.getElementById('cookies');
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var newCookieForm = document.getElementById('new-store');
var grandTotalArray = [];
Store.allStores = [];


// STORE CONSTRTUCTOR FUNCTION

function Store(name, min, max, avg) {
  this.storeName = name;
  this.minCustPerHour = min;
  this.maxCustPerHour = max;
  this.avgCookiePerSale = avg;
  this.totalCookiesPerDay = 0;
  this.cookiesPerHour = [];
  Store.allStores.push(this);
}


// add new store to table

Store.newStore = function(event) {
  event.preventDefault();

  var name = event.target.storename.value;
  var minCust = parseInt(event.target.mincustomers.value);
  var maxCust = parseInt(event.target.maxcustomers.value);
  var avgCookies = parseFloat(event.target.averagecookies.value);

  new Store(name, minCust, maxCust, avgCookies);

  cookieTable.textContent = '';
  Store.renderHeader();
  Store.renderAllStores();
  Store.renderFooter();
};

// render table of random numbers for each hour to DOM

Store.prototype.render = function() {
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = this.storeName;
  trElement.appendChild(tdElement);
  cookieTable.appendChild(trElement);
  this.totalCookiesPerDay = 0;

  for(var i = 0; i < storeHours.length; i++) {
    var randomNumberCookies = Math.floor( (Math.floor( Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour) ) * this.avgCookiePerSale );

    tdElement = document.createElement('td');
    tdElement.textContent = randomNumberCookies;
    trElement.appendChild(tdElement);
    this.cookiesPerHour.push(randomNumberCookies);
    this.totalCookiesPerDay += randomNumberCookies;
  }

  tdElement = document.createElement('td');
  tdElement.textContent = this.totalCookiesPerDay;
  trElement.appendChild(tdElement);
  grandTotalArray.push(this.totalCookiesPerDay);
};

// render header to DOM

Store.renderHeader = function() {
  var headerRow = document.createElement('tr');

  for(var i = -1; i < storeHours.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = storeHours[i];
    headerRow.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Totals';
  headerRow.appendChild(thElement);
  cookieTable.prepend(headerRow);
};

// render all stores to DOM

Store.renderAllStores = function() {
  for(var i = 0; i < Store.allStores.length; i++) {
    Store.allStores[i].render();
  }
};

// render total footer row to DOM

Store.renderFooter = function() {
  var totalRow = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = 'Hourly Totals';
  totalRow.appendChild(tdElement);
  cookieTable.appendChild(totalRow);

  var grandTotal = 0;
  for(var x = 0; x < storeHours.length; x++) {
    var counter = 0;
    for(var y = 0; y < Store.allStores.length; y++) {
      counter += Store.allStores[y].cookiesPerHour[x];
    }
    grandTotal += counter;
    tdElement = document.createElement('td');
    tdElement.textContent = counter;
    totalRow.appendChild(tdElement);
  }

  tdElement = document.createElement('td');
  tdElement.textContent = grandTotal;
  totalRow.appendChild(tdElement);
};


new Store('1st & Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);


Store.renderHeader();
Store.renderAllStores();
Store.renderFooter();

newCookieForm.addEventListener('submit', Store.newStore);





