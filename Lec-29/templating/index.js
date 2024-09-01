const express = require('express');
const app = express();

const todos = [
    'Morning Walk',
    'Reading Book',
    'Learn Express',
    'Eat healthy'
]

app.get('/', (req, res)=>{
    // res.send('Working Fine!!')
    const randomNum = Math.floor(Math.random()*10);
    res.render('index.ejs', {
        title: 'Home Page',
        randomNum
    })
})

app.get('/todos', (req, res)=>{
    res.render('todos.ejs', {
        title: 'Todos',
        data: todos
    })
})

app.listen(5000, ()=>{
    console.log('Server is up at port', 5000);
})