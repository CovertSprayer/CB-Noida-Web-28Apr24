const express = require("express");
const app = express();
const users = require("./data/users.js");

// query parameter & path parameter

app.get("/", (req, res) => {
  res.send("Working fine!");
});

// http://localhost:5555/users?age=30&username=user1
// req.query -> to access query params

app.get("/users", (req, res) => {
  // console.log(req.query); 
  // console.log(req.query.age);
  res.json(users);
});

// app.get('/users/test1', (req, res)=>{
//     const user = users.filter(user => user.username === 'test1');
//     res.json(user);
// })

// app.get('/users/test2', (req, res)=>{
//     const user = users.filter(user => user.username === 'test2');
//     res.json(user);
// })


app.get("/users/getage", (req, res) => {
    const allUsers = users.map(user => ({"age": user.age}));
    res.json(allUsers);
});

// req.params -> to access path params
app.get("/users/:username", (req, res) => {
  const username = req.params.username;
  //   const { username } = req.params; // destructuring
  const user = users.filter((user) => user.username === username);
  res.json(user);
});


app.listen(5555, () => {
  console.log("Server is up at port", 5555);
});
