// Dependencies
const express = require('express')
const mongoose = require('mongoose')

// Environment Variables (getting ready for Heroku)
const app = express();
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/merncrud'
const PORT = process.env.PORT || 3001












app.listen(PORT, () => {
  console.log('Let\'s get things done on port', PORT)
})