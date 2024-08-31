const fs = require("fs");
const path = require("path");

function getData(fileName) {
  const fileLoc = path.join(__dirname, "..", "data", fileName);
  return new Promise((resolve, reject) => {
    fs.readFile(fileLoc, { encoding: "utf-8" }, (err, data) => {
      if (err) reject(err);
      else resolve(JSON.parse(data));
    });
  });
}

module.exports = getData;
