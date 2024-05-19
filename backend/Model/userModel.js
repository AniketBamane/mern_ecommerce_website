const mongoose = require('mongoose');

const userModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  
  },
  email: {
    type: String,
    required: true,
    unique: true,

  },
  password: {
    type: String,
    required: true,
    unique: true,

  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  gender:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User',userModel)