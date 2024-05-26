import  { createSlice } from "@reduxjs/toolkit"

const initalToken = JSON.parse(localStorage.getItem("token"))

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: initalToken,
    user: null,
  },

  reducers: {
    login: (state, action) => {
      if(action.payload.token){
        localStorage.setItem("token",JSON.stringify(action.payload.token))
        state.token = action.payload.token;
        state.user = action.payload.user;
      }
    },
    logout: (state,action) => {
      localStorage.removeItem("token")
      state.token = null;
      state.user = null;
    },

  }
})

export const { login, logout  } = authSlice.actions;

export default authSlice.reducer;