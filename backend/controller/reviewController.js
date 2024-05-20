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
       const updatedProduct =  await productModel.findOneAndUpdate({_id:req.params.id},{$push:{reviews:[review._id]}})
       const updatedUser =  await userModel.findOneAndUpdate({_id:user._id},{$push:{reviews:[review._id]}})
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
      const product = await productModel.findOne({_id:review.product})
      if(product){
        await reviewModel.findOneAndDelete({_id:req.params.id})
        product.reviews.pull(review._id)
        await product.save()
        user.reviews.pull(review._id)
        await user.save()
        // await userModel.findOneAndUpdate({_id:user._id},{$pull:{reviews:review._id}})
        res.status(201).json({message: "review deleted successfully"})
      }else{
        res.status(404).json({message: "product not found"})
      }
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