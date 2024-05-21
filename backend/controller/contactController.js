const contactModel = require("../Model/contactModel")
const userModel = require("../Model/userModel")
const requestContact = async(req,res,next)=>{
  try{
    const {name,email,message} = req.body;
    const user = await userModel.findOne({email})
    if(user){
      const contact = await contactModel.create({name,email,message});
      if(contact){
        res.status(201).json({contact})
      }else{
        res.status(404).json({message: "Contact not created"})
      }
    }else{
      res.status(404).json({message: "this email is not registered , enter your email !"})
    }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}


module.exports = {requestContact}