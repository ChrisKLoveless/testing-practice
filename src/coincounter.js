const coinOperations = {
  quarter: function (price) {
    return Math.floor(price / .25);
  },

  dime: function (price) {
    return Math.floor(price / .10);
  },

  nickel: function (price) {
    return Math.floor(price / .05);
  },

  pennies: function (price) {
    return Math.floor(price / .01);
  }

  
};

module.exports = coinOperations;