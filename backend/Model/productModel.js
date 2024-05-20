const mongoose = require('mongoose')

const productModel = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
    image: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  quantity:{
    type: Number,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  type:{
    type: String,
    required: true
  },
  gender:{
    type: String,
    required: true
  },
  vendor:{
    type: String,
    required: true
  },
  popular:{
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Product', productModel)