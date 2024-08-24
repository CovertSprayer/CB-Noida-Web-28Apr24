const fs = require('fs');
const path = require('path');
// const filePath = __dirname +  '/' + 'data' + '/' + 'file.txt';

const filePath = path.join(__dirname, 'data', 'file.txt');
const data = 'some random generated data!!'

// fs.writeFile(filePath, data, (err) => {
//     if (err) {
//         console.log('Something went Wrong', err);
//         return;
//     }
//     console.log('File written successfully!');
// })

const dataFilePath = path.join(__dirname, 'data', 'data.txt');

fs.readFile(dataFilePath, {encoding: 'utf-8'}, (err, data)=>{
    if(err){
        console.log('Something went wrong!');
        return;
    }
    console.log(data.toUpperCase());
})