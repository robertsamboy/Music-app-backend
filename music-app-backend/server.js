// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const db = mongoose.connection
const cors = require('cors')


// Environment Variables (getting ready for Heroku)
const app = express();
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/merncrud'
const PORT = process.env.PORT || 3001


// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
    () => console.log('MongoDB connection established:', mongoURI)
  )

  // Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))


const musicrouter = require('./controllers/musicrouter')
app.use('/myrouter', musicrouter)


// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')) // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!






app.listen(PORT, () => {
  console.log('Let\'s get things done on port', PORT)
})