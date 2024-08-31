const express = require("express");
const app = express();
const getData = require('./utils/getData');


app.get("/", (req, res) => {
  res.send("Working Fine!");
});

app.get("/users", async (req, res) => {
  try {
    const users = await getData("users.json");
    res.json(users);
  } catch (error) {
    res.json({
      message: "Something went wrong",
    });
  }
});

app.get('/users/:id', async (req, res)=>{
    const id = req.params.id;
    const users = await getData("users.json");
    const user = users.filter(user => user.id == id);
    res.json(user);
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is up at port", PORT);
});
