const validator = (schema) => async(req,res,next)=>{
  try{
    const parseBody = await schema.parseAsync(req.body)
    req.body = parseBody
    next();
  }catch(err){
    const errorObject = {
      message: err.errors[0].message,
      statusCode: 400,
      extraDetails: "credentials are not valid , try entering valid credentials !",
    }
    next(errorObject)
  }
}

module.exports = validator;