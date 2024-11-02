require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 5000;
const authRouter = require('./routes/auth.routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/QuoteDB')
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err))

const app = express();
app.use(express.json());

app.use("/api/v1/auth", authRouter);

app.listen(PORT, ()=>{
    console.log("Server is running on port", PORT);
})
