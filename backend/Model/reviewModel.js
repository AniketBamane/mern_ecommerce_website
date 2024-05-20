const mongoose = require('mongoose')

const reviewModel =  mongoose.Schema({
  user:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"User"
  },
  product:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"Product"
  },
  rating:{
    type:Number,
    required:true
  },
  comment:{
    type:String,
    required:true
  }
})

module.exports = mongoose.model('Review',reviewModel)





