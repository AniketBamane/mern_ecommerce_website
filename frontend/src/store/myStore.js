import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./slices/authSlice"
import productReducer from "./slices/productSlice"
import wishlistReducer from "./slices/wishlistSlice"
import orderReducer from "./slices/orderSlice"

const myStore = configureStore({
  reducer:{
    auth:authReducer,
    product:productReducer,
    wishlist:wishlistReducer,
    order:orderReducer
  }
})




export default myStore;