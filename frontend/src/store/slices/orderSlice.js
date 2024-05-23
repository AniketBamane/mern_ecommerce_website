import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export const fetchOrders = createAsyncThunk("fetchOrders",async({token,status})=>{
  const res = await fetch(`http://localhost:3000/api/order/allOrders?status=${status}`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "authorization": `Bearer ${token}`
    }
  })
  const data = await res.json()
  console.log("fetching done !!")
  if(res.ok){
    console.log("orders are here  "+data.orders)
    return data.orders
  }else{
    console.log("error is here "+data.message)
    return data.message
  }
})
export const deleteOrder = createAsyncThunk("deleteOrder", async ({ token, id }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/order/deleteOrder/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (res.ok) {
      toast.success(data.message); // Show success toast
      return id;
    } else {
      toast.error(data.message); // Show error toast
      return data.message
    }
  } catch (error) {
    toast.error(error.message); // Show error toast
  }
});


const orderSlice = createSlice({
  name: "order",
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
    state.isError.message = action.payload
  })
  builder.addCase(deleteOrder.pending, (state) => {
    state.isLoading = true;
  })
  builder.addCase(deleteOrder.fulfilled, (state, action) => {
    state.orders = state.orders.filter((order) => order._id !== action.payload);
    state.isLoading = false;
  })
  builder.addCase(deleteOrder.rejected, (state, action) => {
    state.isError.status = true;
    state.isError.message = action.payload;
    state.isLoading = false;
  })
 }
})

export default orderSlice.reducer;