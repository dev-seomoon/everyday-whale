
const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://seomoon:ZGglJPhsIlk6RVtV@everyday-whale.jhqysxl.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('mongodb connected...')).catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})