const jwt = require("jsonwebtoken")
const userModel = require("../Model/userModel")
const authMiddleware = async(req, res, next) => {
  try{
    console.log("here i am ")
    const token = req.headers.authorization
    if(!token){
      return res.status(400).json({message:"token not found !"})
    }
    const newToken = token.replace("Bearer ","")
    console.log(newToken)
    const email = await jwt.verify(newToken, 'shhhhh');
    console.log(email)
    if(email){
      const user = await userModel.findOne({email:email.email})
      if(user){
        req.user = user
        next()
      }else{
        res.status(400).json({message:"unauthorized user !"})
      }
    }else{
      res.status(400).json({message:"unauthorized user !"})
    }
    
  }catch(err){
    res.status(500).json({message: err.message})
  }
}


module.exports = authMiddleware