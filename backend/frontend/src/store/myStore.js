import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./slices/authSlice"
import productReducer from "./slices/productSlice"
import wishlistReducer from "./slices/wishlistSlice"
import orderReducer from "./slices/orderSlice"
import reviewReducer from "./slices/reviewSlice"

const myStore = configureStore({
  reducer:{
    auth:authReducer,
    product:productReducer,
    wishlist:wishlistReducer,
    order:orderReducer,
    review:reviewReducer,
  }
})




export default myStore;