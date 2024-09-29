const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const session = require('express-session');

app.use(session({
    secret: 'we-need-some-secret-key',
    name: 'hello'
}))

// Routes
app.get('/', (req, res) => {
  res.send("Home Page");
});

app.get('/set-session', (req, res) => {
    req.session.visited = true; // set
    console.log(req.session);   // get
    res.send('session set successfully!')
})

app.get('/get-session', (req, res) => {
    res.send(req.session);
})

// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});