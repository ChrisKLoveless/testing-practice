const coinOperations = {
  quarter: function (price) {
    return Math.floor(price / .25);
  },
  dime: function (price) {
    return Math.floor(price / .10);
  }
}

module.exports = coinOperations;