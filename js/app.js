'use-strict';

// need objects for each store location that include the following
// name
// location
// min customers per hour
// max cutstomers per hour
// average cookies per sale
// hourly totals --> 6am, 7am, 8am, etc. through 8pm

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// function randomNumber(min, max) {
//   var output = Math.random() * (max - min) + min;
//   console.log(output);
//   return output;
// }

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
    var ulElement = document.getElementById('storeOne');

    for(var i = 0; i < storeHours.length; i++) {
      var liElement = document.createElement('li');
      var numCookiesPerHour = this.randomNumberCookies(this.minCustPerHour, this.maxCustPerHour, this.avgCookiePerSale);
      liElement.textContent = `${storeHours[i]}: ${numCookiesPerHour} cookies`;
      ulElement.appendChild(liElement);
      this.totalCookiesPerDay += numCookiesPerHour;
      var liTotal = document.createElement('li');
      liTotal.textContent = `Total: ${this.totalCookiesPerDay}`;
      this.cookieObject[storeHours[i]] = numCookiesPerHour;
      console.log(this.cookieObject);
    }
    ulElement.appendChild(liTotal);
  },
};

storeOne.render();



