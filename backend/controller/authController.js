const userModel = require("../Model/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const signin = async (req, res) => {
  try{
    const {email,password,name,gender,phone} = req.body;
    const user =  await userModel.findOne({email});
    if(user){
     return res.status(500).json({message: "user already exists  , Try again!"})
    }
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt,async function(err, hash) {
         if(err) return res.status(404).json({message:"error while hashing password !"});
         const user = await userModel.create({email,password:hash,name,gender,phone})
         if(user){
          var token = jwt.sign({email}, 'shhhhh');
          const createdUser =  await userModel.findOne({_id:user._id},{password:0})
          return  res.status(201).json({message: "user created successfully",token,createdUser})
         }else{
          return   res.status(500).json({message: "user not created , Try again !"})
         }
      });
  });
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

const login = async (req, res) => {
  try{
    const {email,password} = req.body;
    const user = await userModel.findOne({email})
    if(user){
      bcrypt.compare(password, user.password, async function(err, result) {
        if(result){
          var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
          const createdUser =  await userModel.findOne({_id:user._id},{password:0})
          res.status(201).json({message: "user logged in successfully",token,createdUser})
        }else{
          res.status(500).json({message: "user not logged in , Try again!"})
        }
      });
    }else{
      res.status(500).json({message: "user not logged in , Try again!"})
    }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

const getUser = async(req, res, next) => {
  try{
    const user = req.user
    if(user){
      const createdUser =  await userModel.findOne({_id:user._id},{password:0})
      res.status(201).json({message: "user fetched  successfully",createdUser})
    }else{
      res.status(500).json({message: "user not fetched properly  , Try again!"})
    }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

module.exports = {
  signin,
  login,
  getUser
}