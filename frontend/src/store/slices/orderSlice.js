import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOrders = createAsyncThunk("fetchOrders",async(token)=>{
  const res = await fetch("http://localhost:3000/api/wishlist/getWishlist",{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "authorization": `Bearer ${token}`
    }
  })
  const data = await res.json()
  if(res.ok){
    return data.wishlist
  }else{
    return data.message
  }
})

const orderSlice = createSlice({
  name: "Orders",
  initialState: {
    orders: [],
    isLoading: false,
    isError: {
      status: false,
      message: "",
    },
 },
 extraReducers: (builder)=>{
  builder.addCase(fetchOrders.pending,(state)=>{
    state.isLoading = true
  })
  builder.addCase(fetchOrders.fulfilled,(state,action)=>{
    state.isLoading = false
    state.orders = action.payload
  })
  builder.addCase(fetchOrders.rejected,(state,action)=>{
    state.isLoading = false
    state.isError.status = true
    state.isError.message = action.payload.message
  })
 }
})

export default orderSlice.reducer;