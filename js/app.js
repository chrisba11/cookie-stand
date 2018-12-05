'use-strict';

var cookieTable = document.getElementById('cookies');
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var newCookieForm = document.getElementById('new-store');


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

Store.allStores = [];

// add new store to table

Store.newStore = function(event) {
  event.preventDefault();

  var name = event.target.storename.value;
  var minCust = event.target.mincustomers.value;
  var maxCust = event.target.maxcustomers.value;
  var avgCookies = event.target.avgeragecookies.value;

  new Store(name, minCust, maxCust, avgCookies);

  cookieTable.textContent = '';
  Store.renderHeader();
  Store.renderAllStores();
};

// render table of random numbers for each hour to DOM

Store.prototype.render = function() {
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = this.storeName;
  trElement.appendChild(tdElement);
  cookieTable.appendChild(trElement);

  for(var i = 0; i < storeHours.length; i++) {
    var randomNumberCookies = Math.floor( (Math.floor( Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour) ) * this.avgCookiePerSale );

    tdElement = document.createElement('td');
    tdElement.textContent = randomNumberCookies;
    trElement.appendChild(tdElement);
    this.cookiesPerHour.push(randomNumberCookies);
  }
};

// render header to DOM

Store.renderHeader = function() {
  var headerRow = document.createElement('tr');

  for(var i = -1; i < storeHours.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = storeHours[i];
    headerRow.appendChild(thElement);
  }
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

  for(var i = 0; i < storeHours.length; i++) {
    var thElement = document.createElement('td');
    thElement.textContent = 'X';
    totalRow.appendChild(thElement);
    console.log(i);
  }
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



// for(var x = 0; x < Store.allStores.length; x++) {
//   for(var y = 0; y < Store.allStores[x].cookiesPerHour.length; y++) {
//     console.log(Store.allStores.cookiesPerHour[y]);
//   }
// }
