const express = require('express');
const cors = require("cors")
const path = require("path")
const authRouter = require('./Router/authRouter');
const productRouter = require("./Router/productRouter")
const wishlistRouter =  require("./Router/wishlistRouter")
const reviewRouter = require("./Router/reviewRouter")
const orderRouter = require("./Router/orderRouter")
const contactRouter = require("./Router/contactRouter")
const connection = require("./utils/db")
const errorMiddleware = require("./middleware/errorMiddleware")
const app = express();
// const corsOptions = {
//   origin: ["https://mern-ecommerce-website-vk42.vercel.app"],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }


app.use(cors());
app.use(express.json())

app.get('/', (req, res)=>{
  app.use(express.static(path.resolve(__dirname,"frontend","dist")));
  res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
})

app.use('/api/auth',authRouter)
app.use("/api/product",productRouter)
app.use("/api/wishlist",wishlistRouter)
app.use("/api/review",reviewRouter)
app.use("/api/order",orderRouter)
app.use("/api/contact",contactRouter)

app.use(errorMiddleware)

app.use((err, req, res, next) => {
  console.log(err.message)
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

connection().then(()=>{
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
})
