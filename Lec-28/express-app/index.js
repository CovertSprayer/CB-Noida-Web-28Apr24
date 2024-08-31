const express = require("express");
const app = express();
const path = require("path");



app.get("/", (req, res) => {
  // res.send(`<h1>Home Page!</h1>`);
  // res.send({
  //     a: 1,
  //     b: 2,
  //     c: 'string',
  //     d: true
  // })
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.get('*', (req, res)=>{
    res.send('404 Not found!')
})




app.listen(5000, () => {
  console.log("Server is up at port", 5000);
});
