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


module.exports = 
{
  createReview,
  deleteReview,
}