// let output = {"quarters": 0, "dimes": 0, "nickels": 0, "pennies": 0};

const coinCounter = (price, quarters = 0, nickels = 0, dimes = 0, pennies = 0) => {

  if(isNaN(price) || price === 0) {
    return price;
  }

  if(price >= .25) {
    price -= .25;
    quarters ++;
    return coinCounter(price, quarters, nickels, dimes, pennies);
  }
  else if(price >= .10) {
    price -= .10;
    dimes ++;
    return coinCounter(price, quarters, nickels, dimes, pennies);
  }
  else if(price >= .05) {
    price -= .05;
    nickels ++;
    return coinCounter(price, quarters, nickels, dimes, pennies);
  }
  else if(price >= .01) {
    price -= .01;
    pennies ++;
    return coinCounter(price, quarters, nickels, dimes, pennies);
  }
  else {
    return "Quarters: " + quarters + ", Dimes: " + dimes + ", Nickels: " + nickels + ", Pennies: " + pennies;
  }
};

console.log(coinCounter(5.99));