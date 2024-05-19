const zod = require("zod");

const loginSchema = zod.object({
  email: zod.string({required_error:"email is required !"}).trim().email({message:"email is invalid"}),
  password: zod.string({required_error:"password is required !"}).min(6,{message:"password must be at least 6 characters"}),
})

module.exports = loginSchema;