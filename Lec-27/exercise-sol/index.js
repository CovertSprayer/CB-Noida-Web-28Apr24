const fs = require('fs');
const path = require('path');

const filePath1 = path.join(__dirname, 'data', 'input1.txt');
const filePath2 = path.join(__dirname, 'data', 'input2.txt');
const outputFilePath = path.join(__dirname, 'data', 'output.txt');

let numbers = [];

fs.readFile(filePath1, {encoding: 'utf-8'}, (err, data)=>{
    if(err){
        console.log(err);
        return;
    }

    const nums = data.split('\r\n');
    // numbers = [...nums];
    numbers.push(nums);

    fs.readFile(filePath2, {encoding: 'utf-8'}, (err, data)=>{
        if(err){
            console.log(err);
            return;
        }
    
        const nums = data.split('\r\n');
        // numbers = [...numbers, ...nums];
        numbers.push(nums);
    
        numbers = numbers.flat();
        numbers = numbers.sort((a,b)=>a-b);
        numbers = numbers.join('\n');

        fs.writeFile(outputFilePath, numbers, (err)=>{
            if(err){
                console.log(err);
                return;
            }
        
            console.log('File written successfully!');
        })
    })
})

