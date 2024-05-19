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
  }
})

module.exports = mongoose.model('Product', productModel)