const zod = require('zod');

const contactValidationSchema = zod.object({
  name: zod.string({required_error:"name is required"}).trim().min(3,{message:"name must be at least 3 characters"}),
  email: zod.string({required_error:"email is required"}).trim().email({message:"email is invalid"}),
  message: zod.string({required_error:"message is required"}).trim().min(10,{message:"message must be at least 10 characters"}),
})

module.exports = contactValidationSchema;