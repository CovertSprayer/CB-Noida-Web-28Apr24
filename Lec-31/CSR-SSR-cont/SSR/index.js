const express = require("express");
const app = express();
const path = require("path");

const todos = ["Watch Movies", "Buy groceries", "Go to gym"];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.render("home", { todos });
});

app.get('/about', (req, res) => {
    res.render('about')
})

// app.get('/js/script.js', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'js', 'script.js'))
// })


app.listen(5000, () => {
  console.log("Server is up at port", 5000);
});
