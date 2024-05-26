import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchReviews = createAsyncThunk("fetchReviews",async(productId)=>{
  const res = await fetch(`https://mern-ecommerce-website-jker.vercel.app/api/review/getAllReviews/${productId}`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
    }
  })
  const data = await res.json()
  if(res.ok){
    return data.reviews
  }else{
    return data.message
  }
})

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    reviews: [],
    isLoading: false,
    isError: {
      status: false,
      message: "",
    },
 },
 extraReducers: (builder)=>{
  builder.addCase(fetchReviews.pending,(state)=>{
    state.isLoading = true
  })
  builder.addCase(fetchReviews.fulfilled,(state,action)=>{
    state.isLoading = false
    state.reviews = action.payload
  })
  builder.addCase(fetchReviews.rejected,(state,action)=>{
    state.isLoading = false
    state.isError.status = true
    state.isError.message = action.payload.message
  })
 }
})

export default reviewSlice.reducer;
