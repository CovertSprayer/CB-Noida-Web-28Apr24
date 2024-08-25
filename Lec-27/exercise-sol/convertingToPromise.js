const fs = require("fs");
const path = require("path");

function getData(fileName) {
  const filePath = path.join(__dirname, "data", fileName);

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

function writeData(fileName, data) {
  const filePath = path.join(__dirname, "data", fileName);

  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err) => {
      if (err) reject(err);
      else resolve("Successfully written!");
    });
  });
}

// async function main() {
//     const data1 = await getData('input1.txt');
//     const data2 = await getData('input2.txt');

//     let output = [...data1.split('\r\n'), ...data2.split('\r\n')];
//     output = output.sort((a, b) => a - b);
//     output = output.join('\r\n');

//     const msg = await writeData('output.txt', output);
//     console.log(msg);
// }

async function main() {
  const data1 = getData("input1.txt");
  const data2 = getData("input2.txt");

  const data = await Promise.all([data1, data2]);

  let output = [...data[0].split("\r\n"), ...data[1].split("\r\n")];
  output = output.sort((a, b) => a - b);
  output = output.join("\r\n");

  const msg = await writeData("output.txt", output);
  console.log(msg);
}

main();
