const express = require('express')
const bodyParser = require('body-parser')

const topupRoutes = require('./src/routes/topup')
const usersRoutes = require('./src/routes/users')
const transferRoutes = require('./src/routes/transfer')
const profileRoutes = require('./src/routes/profile')

const app = express()
//middleware
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/topup', topupRoutes)
app.use('/users', usersRoutes)
app.use('/transfer', transferRoutes)
app.use('/profile', profileRoutes)

  app.listen(8000, () => {
    console.log("Server running on port 8000");
  });
  