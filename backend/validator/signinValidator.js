const zod = require("zod");

const signinSchema = zod.object({
  email: zod.string({required_error:"email is required !"}).trim().email({message:"email is invalid"}),
  password: zod.string({required_error:"password is required !"}).min(6,{message:"password must be at least 6 characters"}),
  name: zod.string({required_error:"name is required !"}).trim().min(3,{message:"name must be at least 3 characters"}),
  gender: zod.string({required_error:"gender is required"}).trim().min(4,{message:"gender is invalid !"}),
  phone: zod.string({required_error:"phone is required"}).trim().min(10,{message:"phone number is invalid !"}).max(10,{message:"phone number is not valid !"})
})

module.exports = signinSchema;