const mongoose = require('mongoose')

const orderModel = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  orderDate:{
    type: Date,
    default: Date.now()
  },
  status:{
    type: String,
    required: true,
    default: 'pending'
  },
  amount:{
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Order',orderModel)