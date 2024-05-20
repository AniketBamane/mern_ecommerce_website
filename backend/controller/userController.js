const { model } = require("mongoose")
const userModel = require("../Model/userModel")
const addProduct = async(req, res, next) => {
  try{
    const products = req.body.products
    const user = req.user
    const updatedUser = await userModel.findOneAndUpdate({_id:user._id},{$push:{cart:products}})
    console.log(updatedUser)
    if(updatedUser){
    res.status(201).json({message: "product added to cart successfully"})

    }else{
      res.status(404).json({message: "product not added to cart successfully"})
    }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

const deleteProduct = async(req, res, next) => {
  try{
    const productId = req.params.id
    const user = req.user
    const updatedUser = await userModel.findOneAndUpdate({_id:user._id},{$pull:{cart:productId}})
    if(updatedUser){
    res.status(201).json({message: "product deleted from cart successfully"})
    }else{
      res.status(404).json({message: "product not deleted from cart successfully"})
    }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}


module.exports = {
  addProduct,
  deleteProduct,
}