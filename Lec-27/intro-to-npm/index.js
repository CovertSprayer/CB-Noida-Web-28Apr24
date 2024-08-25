const colors = require("colors");
const figlet = require("figlet");

figlet("Hello World!", (err, data) => {
    if(err){
        return;
    }

    console.log(data.rainbow);
});

console.log("Hello!".green);
console.log("Javascript!".rainbow);
