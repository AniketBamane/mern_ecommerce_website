import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWishlist = createAsyncThunk("fetchWishlist",async(token)=>{
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

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
    isLoading: false,
    isError: {
      status: false,
      message: "",
    },
 },
 extraReducers: (builder)=>{
  builder.addCase(fetchWishlist.pending,(state)=>{
    state.isLoading = true
  })
  builder.addCase(fetchWishlist.fulfilled,(state,action)=>{
    state.isLoading = false
    state.wishlist = action.payload
  })
  builder.addCase(fetchWishlist.rejected,(state,action)=>{
    state.isLoading = false
    state.isError.status = true
    state.isError.message = action.payload.message
  })
 }
})

export default wishlistSlice.reducer;