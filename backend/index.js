const express = require('express');
const authRouter = require('./Router/authRouter');
const productRouter = require("./Router/productRouter")
const connection = require("./utils/db")
const errorMiddleware = require("./middleware/errorMiddleware")
const app = express();
app.use(express.json())
app.use('/api/auth',authRouter)
app.use("/api/product",productRouter)

app.use(errorMiddleware)
connection().then(()=>{
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
})