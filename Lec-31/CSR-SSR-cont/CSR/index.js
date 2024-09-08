const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const todos = ["Watch Movies", "Buy groceries", "Go to gym"];

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

app.get("/todos", (req, res) => {
  res.json({
    todos,
  });
});

app.post("/todos", (req, res) => {
  const { todo } = req.body;
  console.log(todo, req.query);

  todos.push(todo);
  res.json({
    todos,
  });
});

app.listen(5000, () => {
  console.log("Server is up at port", 5000);
});
