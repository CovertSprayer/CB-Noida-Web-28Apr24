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
const MongoStore = require('connect-mongo');
const PORT = 5000;
const mongoURL = "mongodb://127.0.0.1:27017/E-Com-DB";

mongoose
  .connect(mongoURL)
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err));


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(session({
  secret: "some-secret",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: mongoURL,
    // collectionName: "sessions",
    ttl: 7 * 24 * 60 * 60 * 1000
  }),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  }
}))
app.use(flash());

// setup passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new Strategy(UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

app.use((req, res, next) => {
  app.locals.success = req.flash('success');
  app.locals.error = req.flash('error');
  app.locals.user = req.user;
  app.locals.productQuantity = req.user?.cart?.reduce((acc, item) => {
    return acc + item.quantity; 
  }, 0)
  next();
})

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
const cartRoutes = require('./routes/cart.routes');

app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);
app.use(cartRoutes);

app.get('*', (req, res) => {
  res.render('404')
})

// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});