import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./slices/authSlice"
const myStore = configureStore({
  reducer:{
    auth:authReducer,
  }
})




export default myStore;