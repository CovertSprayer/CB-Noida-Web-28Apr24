const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const Strategy = require('passport-local');
const UserModel = require('./models/User.model');
const PORT = 5000;

mongoose
  .connect("mongodb://127.0.0.1:27017/E-Com-DB")
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err));


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(session({
  secret: "some-secret"
}))
app.use(flash());

app.use((req, res, next) => {
  app.locals.success = req.flash('success');
  next();
})

// setup passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new Strategy(UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser())
passport.deserializeUser(UserModel.deserializeUser());

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as Template Engine
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('home', { title: 'Home | E-Commerce' });
});

const productRoutes = require('./routes/product.routes');
const reviewRoutes = require('./routes/review.routes');
const authRoutes = require('./routes/auth.routes');
app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);


// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});