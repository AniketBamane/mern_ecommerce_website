const errorMiddleware = async(err,req,res,next)=>{
const message =  err.message || "something went wrong"
const statusCode = err.statusCode || 400
const extraDetails = err.extraDetails || "some error from backend !"

res.status(statusCode).json({message,extraDetails})
}

module.exports = errorMiddleware;