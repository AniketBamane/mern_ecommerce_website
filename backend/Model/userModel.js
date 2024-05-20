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
  },
  orders:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  phone:{
    type: String,
    required: true
  },
  reviews:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }
  ],
  wishlist:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  cart:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
})

module.exports = mongoose.model('User',userModel)