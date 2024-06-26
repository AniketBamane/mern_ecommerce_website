const reviewModel =  require("../Model/reviewModel")
const productModel = require("../Model/productModel")
const userModel = require("../Model/userModel")
const createReview = async (req, res, next) => {
  try{
    // expects product id from params
    const user =  req.user
    const product = await productModel.findOne({_id:req.params.id})
    if(product){
      const review = await  reviewModel.create({
        user:user._id,
        product:product._id,
        rating:req.body.rating,
        comment:req.body.comment,
      })
      if(review){
        res.status(201).json({message: "review created successfully"})
      }else{
        res.status(404).json({message: "product not found"})
      }
      }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

const deleteReview = async(req, res, next)=>{
  try{
    // expects review id from params
    const user =  req.user
    const review = await reviewModel.findOne({_id:req.params.id})
    if(review){
      await reviewModel.findOneAndDelete({_id:req.params.id})
      res.status(201).json({message: "review deleted successfully"})
    }else{
      res.status(404).json({message: "review not found"})
    }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

const getAllReviews = async(req, res, next)=>{
  try{
    const productId = req.params.id
    const reviews = await reviewModel.find({product:productId})
    if(reviews){
      res.status(200).json({reviews})
    }else{
      res.status(404).json({reviews:[],message: "No reviews found"})
    }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}
//TODO: user must have review field in it's model to acheive populate operation 


module.exports = 
{
  createReview,
  deleteReview,
  getAllReviews,
}