const contactModel = require("../Model/contactModel")
const requestContact = async(req,res,next)=>{
  try{
    const {name,email,message} = req.body;
    const contact = await contactModel.create({name,email,message});
    if(contact){
      res.status(201).json({contact})
    }else{
      res.status(404).json({message: "Contact not created"})
    }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}


module.exports = {requestContact}