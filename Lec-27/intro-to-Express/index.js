const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res)=>{
    res.send('You are on login page!')
})

app.get('*', (req, res)=>{
    res.send('404! Not Found!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
