import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchWishlist = createAsyncThunk("fetchWishlist",async(token)=>{
  const res = await fetch("https://mern-ecommerce-website-jker.vercel.app/api/wishlist/getWishlist",{
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

export const addProductToWishlist = createAsyncThunk("addProductToWishlist",async({token,wishlist})=>{
  try {
    const res = await fetch("https://mern-ecommerce-website-jker.vercel.app/api/wishlist/addProducts",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "authorization": `Bearer ${token}`
      },
      body:JSON.stringify({
        products:wishlist
      })
    })
    const data = await res.json()
    if(res.ok){
      toast.success("product is added to wishlist successfully !")
      return data.wishlist.wishlist
    }else{
      return data.message
    }
  }catch(err){
    return err.message
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
  //add a product in wishlist
  builder.addCase(addProductToWishlist.pending,(state)=>{
    state.isLoading = true
  })
  builder.addCase(addProductToWishlist.fulfilled,(state,action)=>{
    state.isLoading = false
    state.wishlist = action.payload
  })
  builder.addCase(addProductToWishlist.rejected,(state,action)=>{
    state.isLoading = false
    state.isError.status = true
    state.isError.message = action.payload.message
  })
 }
})

export default wishlistSlice.reducer;
