import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const registerUser = createAsyncThunk("register", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/api/user/register",user);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});

export const loginUser = createAsyncThunk("login", async (user) => {
  try {
    const result = await axios.post("http://localhost:5000/api/user/login",user);
    return result.data;
  } catch (error) {
    console.log(error)
  }
});

export const currentUser = createAsyncThunk("current", async () => {
  let opts ={
    headers:{
      Authorization:localStorage.getItem("token"),
    },
  };
  try {
    const result = await axios.get("http://localhost:5000/api/user/current",opts);
    return result.data;
    console.log(result.data)
  } catch (error) {
    console.log(error)
  }
});


const initialState = {
  user: null,
  status: null,
};




export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout : (state,action)=>{
      localStorage.removeItem("token");
      state.user = null;
    }
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.status = "pending";
    },
    [registerUser.fulfilled]: (state,action) => {
      state.status = "success";
      state.user = action.payload.user;
      localStorage.setItem("token",action.payload.token)
    },
    [registerUser.rejected]: (state) => {
      state.status = "fail";
    },
    [loginUser.pending]: (state) => {
      state.status = "pending";
    },
    [loginUser.fulfilled]: (state,action) => {
      state.status = "success";
      state.user = action.payload.user;
      localStorage.setItem("token",action.payload.token)
    },
    [loginUser.rejected]: (state) => {
      state.status = "fail";
    },
    [currentUser.pending]: (state) => {
      state.status = "pending";
    },
    [currentUser.fulfilled]: (state,action) => {
      state.status = "success";
      state.user = action.payload.user;
    },
    [currentUser.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const {logout} = userSlice.actions;

export default userSlice.reducer;