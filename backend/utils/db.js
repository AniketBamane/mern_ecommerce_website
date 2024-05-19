const mongoose = require('mongoose')

const connection = async (req, res) => {
  try{
   await  mongoose.connect('mongodb+srv://aniketbamane696:aniketbamane29112003@cluster0.dn4p6d7.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0')
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

module.exports = connection
