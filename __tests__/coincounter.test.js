const coinOperations = require('../src/coincounter');

describe("coin tests", () => {
  test("return number of quarters in price", () => {
    expect(coinOperations.quarter(1.00)).toEqual(4);
  });

  test("return number of dimes in a given amount", () => {
    expect(coinOperations.dime(1.00)).toEqual(10);
  });
});