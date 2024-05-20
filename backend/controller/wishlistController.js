const { model } = require("mongoose")
const userModel = require("../Model/userModel")
const addProduct = async(req, res, next) => {
  try{
    const products = req.body.products
    const user = req.user
    const updatedUser = await userModel.findOneAndUpdate({_id:user._id},{$push:{wishlist:products}})
    console.log(updatedUser)
    if(updatedUser){
    res.status(201).json({message: "product added to wishlist successfully"})

    }else{
      res.status(404).json({message: "product not added to wishlist successfully"})
    }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

const deleteProduct = async(req, res, next) => {
  try{
    const productId = req.params.id
    const user = req.user
    const updatedUser = await userModel.findOneAndUpdate({_id:user._id},{$pull:{wishlist:productId}})
    if(updatedUser){
    res.status(201).json({message: "product deleted from wishlist successfully"})
    }else{
      res.status(404).json({message: "product not deleted from wishlist successfully"})
    }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}


module.exports = {
  addProduct,
  deleteProduct,
}