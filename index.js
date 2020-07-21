//* YOU SHOULD SEE THIS COMMENT

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const router = require('./config/routes')
const errorHandler = require('./lib/errorHandler')
const { dbURI, port } = require('./config/environment')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err)
    console.log('Mongo is connected!')
  }
)

app.use(bodyParser.json())

app.use('/api', router)

app.use(errorHandler)

app.listen(port, ()=> console.log(`Express is listening on port ${port}`))