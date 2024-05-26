import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export const fetchOrders = createAsyncThunk("fetchOrders",async({token,status})=>{
  const res = await fetch(`https://mern-ecommerce-website-jker.vercel.app/api/order/allOrders?status=${status}`,{
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
    const res = await fetch(`https://mern-ecommerce-website-jker.vercel.app/api/order/deleteOrder/${id}`, {
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

export const createOrder = createAsyncThunk("createOrder",async({token,cartArray,amount})=>{
  const transformedArray = cartArray.map((item)=>(
    {
      product:item.product,
      quantity:item.quantity
    }
  ))
  try{
    const res = await fetch(`https://mern-ecommerce-website-jker.vercel.app/api/order/createOrder`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "authorization": `Bearer ${token}`
      },
      body:JSON.stringify({products:transformedArray,amount:amount,status:"placed"})
    })
    const data = await res.json()
    if(res.ok){
      toast.success("order created successfully !")
      return data.order
    }else{
      toast.error(data.message)
    }
  }catch(err){
    toast.error(err.message)
  }
})



const initialState =  JSON.parse(localStorage.getItem(`cart`))

const orderSlice = createSlice({
  name: "order",
  initialState: {
    cart:initialState || {
      cartItems:[],
      totalPrice:0,
    },
    orders: [],
    isLoading: false,
    isError: {
      status: false,
      message: "",
    },
 },
 reducers:{
  addToCart:(state,action)=>{
    state.cart.cartItems.push({
      product:action.payload.id,
      quantity:action.payload.quantity,
      name:action.payload.name,
      price:action.payload.price/action.payload.quantity,
      image:action.payload.image
    })
    state.cart.totalPrice = state.cart.totalPrice + action.payload.price
    localStorage.setItem(`cart`,JSON.stringify(state.cart))
    toast.success("product is added to cart !")
  },
  removeFromCart:(state,action)=>{
    state.cart.cartItems = state.cart.cartItems.filter((item)=>item.product !== action.payload.id)
    state.cart.totalPrice = state.cart.totalPrice - action.payload.price
    localStorage.setItem(`cart`,JSON.stringify(state.cart))
    toast.success("product is removed from cart !")
  },
  clearCart:(state)=>{
    state.cart.cartItems = []
    state.cart.totalPrice = 0
    localStorage.setItem(`cart`,JSON.stringify(state.cart))
  },
  updateCartItemQuantity:(state,action)=>{
    state.cart.cartItems = state.cart.cartItems.map((item)=>{
      if(item.product === action.payload.id){
        item.quantity = action.payload.quantity
      }
      return item
    })
    if(action.payload.operation == "increasing"){
      state.cart.totalPrice = state.cart.totalPrice + action.payload.price
    }else if(action.payload.operation == "reducing"){
      state.cart.totalPrice = state.cart.totalPrice - action.payload.price
    }
    localStorage.setItem(`cart${state.cart.userId}`,JSON.stringify(state.cart))
    toast.success("product quantity is updated !")
  }
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
  //create order
  builder.addCase(createOrder.pending,(state)=>{
    state.isLoading = true
  })
  builder.addCase(createOrder.fulfilled,(state,action)=>{
    state.isLoading = false
    state.orders.push({
      products:action.payload.products,
      status:action.payload.status,
      amount:action.payload.amount,
      _id:action.payload._id
    })
  })
  builder.addCase(createOrder.rejected,(state,action)=>{
    state.isLoading = false
    state.isError.status = true
    state.isError.message = action.payload.message
  })
 }
})

export const {addToCart,removeFromCart,clearCart,updateCartItemQuantity} = orderSlice.actions;

export default orderSlice.reducer;
