const { BadRequestError } = require("../utils/errors");

class GiftExchange {
  static pairs(names) {
    let output = [];

    if (names.length % 2 === 1) {
      return next(new BadRequestError());
    }

    let copy = names;

    
    while (names.length > 0) {
      let index = parseInt(Math.random() * names.length);
      let firstName = names[index];

      names = names.filter((item) => item !== firstName);

      let index2 = parseInt(Math.random() * names.length);
      let secondName = names[index2];

      names = names.filter((item) => item !== secondName);

      let array = [firstName, secondName];

      output.push(array);
    }

    return output;
  }

  static traditional(names) {
    let output = [];

    let items = [];

    while (names.length > 0) {
      let index = parseInt(Math.random() * names.length);
      let value = names[index];
      items.push(value);

      names = names.filter((item) => item !== value);
    }

    for (let i = 0; i < items.length; i++) {
      let item;

      if (i != items.length - 1) {
        item = items[i] + " is giving a gift to " + items[i + 1];
      } else {
        item = items[i] + " is giving a gift to " + items[0];
      }

      output.push(item);
    }

    return output;
  }
}

module.exports = GiftExchange;
