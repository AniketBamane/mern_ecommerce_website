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
    default: 'unplaced'
  },
  amount:{
    type: Number,
    required: true
  },
  products:[
    {
      product:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      quantity:{
        type: Number,
        default: 0
      }
    }
  ]
})

module.exports = mongoose.model('Order',orderModel)