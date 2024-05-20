const orderModel = require("../Model/orderModel")
const getAllOrders = async(req,res,next) => {
  try{
    const user = req.user
    const orders = await orderModel.find({user:user._id})
    if(orders){
      res.status(200).json({orders})
    }else{
      res.status(404).json({message: "Orders not found"})
    }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

const createOrder = async (req, res,next) => {
  try{
    const user = req.user
    const order = await orderModel.create({user:user._id,products:req.body.products,amount:req.body.amount})
    if(order){
      res.status(201).json({order})
    }else{
      res.status(404).json({message: "Order not created"})
    }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

const deleteOrder = async(req, res,next) => {
  try{
    const order = await orderModel.findOne({_id:req.params.id})
    if(order){
      await orderModel.findOneAndDelete({_id:req.params.id})
      res.status(200).json({message: "Order deleted successfully"})
    }else{
      res.status(404).json({message: "Order not found"})
    }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

module.exports = {
  getAllOrders,
  createOrder,
  deleteOrder,
}