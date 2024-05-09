let products = [];
const fs = require("fs");
const path = require("path");
const rootdir = require("../pathHelper/path");
const p = path.join(rootdir, "data", "product.txt");
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    products.push(this);

    fs.writeFile(p, JSON.stringify(products), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Array written to file successfully.");
      }
    });
  }
  static fetchAll() {
    fs.readFile(p, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      let productsArray = JSON.parse(data);
      console.log(productsArray);
      products = productsArray;
    });
    return products;
  }
};
