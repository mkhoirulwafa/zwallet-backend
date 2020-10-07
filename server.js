const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const topupRoutes = require('./src/routes/topup')
const usersRoutes = require('./src/routes/users')
const transferRoutes = require('./src/routes/transfer')
const profileRoutes = require('./src/routes/profile')
const historyRoutes = require('./src/routes/history')

const app = express()
//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/topup', topupRoutes)
app.use('/users', usersRoutes)
app.use('/transfer', transferRoutes)
app.use('/profile', profileRoutes)
app.use('/history', historyRoutes)

  app.listen(process.env.PORT, () => {
    console.log("Server running on port 8000");
  });
  