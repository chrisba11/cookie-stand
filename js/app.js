'use-strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Store One Object
var storeOne = {
  name: '1st & Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerSale: 6.3,
  totalCookiesPerDay: 0,
  cookieObject: {},
  // THE FUNCTION BELOW COULD BE WRITTEN USING THE FOLLOWING FUNCTIONS
  // randomCustPerHour: function() {
  //   return Math.round( Math.random(this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour );
  // }
  // averagePerHour: function() {
  //   return Math.round( this.randomCustPerHour() * this.aveCookiePerSale )
  // }
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
      var liTotal = document.createElement('li');
      liTotal.textContent = `Total: ${this.totalCookiesPerDay}`;
    }
    ulElement.appendChild(liTotal);

    var h3Element = document.getElementById('store-one-heading');
    h3Element.textContent = this.name;
  },
};

// Store Two Object

var storeTwo = {
  name: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiePerSale: 1.2,
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
    var ulElement = document.getElementById('store-two');

    for(var i = 0; i < storeHours.length; i++) {
      var liElement = document.createElement('li');
      var numCookiesPerHour = this.randomNumberCookies(this.minCustPerHour, this.maxCustPerHour, this.avgCookiePerSale);
      liElement.textContent = `${storeHours[i]}: ${numCookiesPerHour} cookies`;
      ulElement.appendChild(liElement);

      this.totalCookiesPerDay += numCookiesPerHour;
      this.cookieObject[storeHours[i]] = numCookiesPerHour;
      var liTotal = document.createElement('li');
      liTotal.textContent = `Total: ${this.totalCookiesPerDay}`;
    }
    ulElement.appendChild(liTotal);

    var h3Element = document.getElementById('store-two-heading');
    h3Element.textContent = this.name;
  },
};

// Store Three Object

var storeThree = {
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiePerSale: 3.7,
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
    var ulElement = document.getElementById('store-three');

    for(var i = 0; i < storeHours.length; i++) {
      var liElement = document.createElement('li');
      var numCookiesPerHour = this.randomNumberCookies(this.minCustPerHour, this.maxCustPerHour, this.avgCookiePerSale);
      liElement.textContent = `${storeHours[i]}: ${numCookiesPerHour} cookies`;
      ulElement.appendChild(liElement);

      this.totalCookiesPerDay += numCookiesPerHour;
      this.cookieObject[storeHours[i]] = numCookiesPerHour;
      var liTotal = document.createElement('li');
      liTotal.textContent = `Total: ${this.totalCookiesPerDay}`;
    }
    ulElement.appendChild(liTotal);

    var h3Element = document.getElementById('store-three-heading');
    h3Element.textContent = this.name;
  },
};

// Store Four Object

var storeFour = {
  name: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiePerSale: 2.3,
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
    var ulElement = document.getElementById('store-four');

    for(var i = 0; i < storeHours.length; i++) {
      var liElement = document.createElement('li');
      var numCookiesPerHour = this.randomNumberCookies(this.minCustPerHour, this.maxCustPerHour, this.avgCookiePerSale);
      liElement.textContent = `${storeHours[i]}: ${numCookiesPerHour} cookies`;
      ulElement.appendChild(liElement);

      this.totalCookiesPerDay += numCookiesPerHour;
      this.cookieObject[storeHours[i]] = numCookiesPerHour;
      var liTotal = document.createElement('li');
      liTotal.textContent = `Total: ${this.totalCookiesPerDay}`;
    }
    ulElement.appendChild(liTotal);

    var h3Element = document.getElementById('store-four-heading');
    h3Element.textContent = this.name;
  },
};

// Store Five Object

var storeFive = {
  name: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiePerSale: 4.6,
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
    var ulElement = document.getElementById('store-five');

    for(var i = 0; i < storeHours.length; i++) {
      var liElement = document.createElement('li');
      var numCookiesPerHour = this.randomNumberCookies(this.minCustPerHour, this.maxCustPerHour, this.avgCookiePerSale);
      liElement.textContent = `${storeHours[i]}: ${numCookiesPerHour} cookies`;
      ulElement.appendChild(liElement);

      this.totalCookiesPerDay += numCookiesPerHour;
      this.cookieObject[storeHours[i]] = numCookiesPerHour;
      var liTotal = document.createElement('li');
      liTotal.textContent = `Total: ${this.totalCookiesPerDay}`;
    }
    ulElement.appendChild(liTotal);

    var h3Element = document.getElementById('store-five-heading');
    h3Element.textContent = this.name;
  },
};

storeOne.render();
storeTwo.render();
storeThree.render();
storeFour.render();
storeFive.render();

