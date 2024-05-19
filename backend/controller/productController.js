const productModel = require("../Model/productModel")
const getAllProducts = async(req, res, next) =>{
  try{
    const products = await productModel.find()
    if(products.length !== 0){
    res.status(200).json({products})

    }else{
      res.status(404).json({message: "No products found"})
    }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}


const getAProduct = async(req, res,next)=>{
  try{
    const product = await productModel.findOne({_id:req.params.id})
    if(product){
      res.status(200).json({product})
    }else{
      res.status(404).json({message: "Product not found"})
    }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

module.exports = {
  getAllProducts,
  getAProduct,
}