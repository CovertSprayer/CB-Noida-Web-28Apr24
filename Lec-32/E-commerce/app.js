const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;

mongoose
  .connect("mongodb://127.0.0.1:27017/E-Com-DB")
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err));


// Middleware
app.use(express.urlencoded({ extended: true }));

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('home', { title: 'Home | E-Commerce' });
});

const productRoutes = require('./routes/product.routes');
app.use(productRoutes);


// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});