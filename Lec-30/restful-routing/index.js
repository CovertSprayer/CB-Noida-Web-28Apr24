const express = require("express");
const app = express();
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");
const path = require('path');

console.log(process.cwd());
console.log(__dirname);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

const todos = [
  {
    id: uuid(),
    task: "Learn Express",
  },
  {
    id: uuid(),
    task: "Buy groceries",
  },
];

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("Working Fine");
});

app.get("/todos", (req, res) => {
  res.render("todos/index", {
    todos,
  });
});

app.get("/todos/new", (req, res) => {
  res.render("todos/new.ejs");
});

app.post("/todos", (req, res) => {
  const { task } = req.body;
  const todo = {
    id: uuid(),
    task,
  };
  todos.push(todo);

  res.redirect("/todos");
});

app.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id == id);
  res.render("todos/show.ejs", {
    todo,
  });
});

app.get("/todos/:id/edit", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id == id);
  res.render("todos/edit.ejs", {
    todo,
  });
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const todo = todos.find((todo) => todo.id == id);
  todo.task = task;

  res.redirect('/todos');
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((todo) => todo.id == id);
  todos.splice(index, 1);
  res.redirect("/todos");
});

app.listen(5000, () => {
  console.log("Server is up at port", 5000);
});
