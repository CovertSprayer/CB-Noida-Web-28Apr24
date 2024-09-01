const express = require('express');
const app = express();

// middleware functions
app.use(express.urlencoded({extended: true}));

const users = [
    {
        username: 'abhinav',
        email: 'abhinav@gamil.com',
        age: '25'
    },
    {
        username: 'rahul',
        email: 'rahul@yahoo.com',
        age: 29
    }
]

app.get('/', (req, res)=>{
    // res.send('Working FIne!')
    res.render('home.ejs')
})

app.get('/users', (req, res) => {
    res.render('users.ejs', {
        users
    })
})

app.get('/user-form', (req, res)=>{
    res.render('newUser.ejs')
})

app.post('/users', (req, res) => {
    const userData = req.body;
    users.push(userData);

    res.redirect('/users');
    // res.send('You made a request!')
})

app.listen(5000, ()=>{
    console.log('Server is up at port', 5000);
})