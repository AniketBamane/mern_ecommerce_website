import  { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMenProducts = createAsyncThunk("fetchMenProducts",async()=>{
  const res = await fetch("http://localhost:3000/api/product/men",{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
  })
  const data = await res.json()
  return data.products
})

export const fetchWomenProducts = createAsyncThunk("fetchWomenProducts",async()=>{
  const res = await fetch("http://localhost:3000/api/product/women",{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
  })
  const data = await res.json()
  return data.products
})
export const fetchKidsProducts = createAsyncThunk("fetchKidsProducts",async()=>{
  const res = await fetch("http://localhost:3000/api/product/kids",{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
  })
  const data = await res.json()
  return data.products
})
const productSlice = createSlice({
  name: "product",
  initialState: {
    womenProducts: [],
    kidsProducts: [],
    menProducts: [],
    isLoading:false,
    isError:{
      status:false,
      message:""
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchMenProducts.pending,(state)=>{
      console.log("pending")
      state.isLoading = true
    })
    builder.addCase(fetchMenProducts.fulfilled,(state,action)=>{
      state.menProducts = action.payload
      state.isLoading = false
      console.log("fulfilled")
    })
    builder.addCase(fetchMenProducts.rejected,(state,action)=>{
      state.isLoading = false
      state.isError.status = true
      state.isError.message = action.payload.message
    })
    // women 
    builder.addCase(fetchWomenProducts.pending,(state,action)=>{
      state.isLoading = true
    })
    builder.addCase(fetchWomenProducts.fulfilled,(state,action)=>{
      state.womenProducts = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchWomenProducts.rejected,(state,action)=>{
      state.isLoading = false
      state.isError.status = true
      state.isError.message = action.payload.message
    })
    //kids
    builder.addCase(fetchKidsProducts.pending,(state,action)=>{
      state.isLoading = true
    })
    builder.addCase(fetchKidsProducts.fulfilled,(state,action)=>{
      state.kidsProducts = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchKidsProducts.rejected,(state,action)=>{
      state.isLoading = false
      state.isError.status = true
      state.isError.message = action.payload.message
    })
  }
})


export default productSlice.reducer