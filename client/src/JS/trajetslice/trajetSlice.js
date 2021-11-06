import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const ajouterTrajet = createAsyncThunk("Ajouter", async (trajet) => {
  try {
    let result = await axios.post("http://localhost:5000/api/trajet/",trajet);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

export const getAllTrajets = createAsyncThunk("getAllTrajets", async () => {
  try {
    const result = await axios.get("http://localhost:5000/api/trajet/");
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

// export const modifierTrajet = createAsyncThunk("login", async (user) => {
//   try {
//     const result = await axios.post("http://localhost:5000/api/trajet/",user);
//     return result.data;
//   } catch (error) {
//     console.log(error)
//   }
// });

// export const currentUser = createAsyncThunk("current", async () => {
//   let opts ={
//     headers:{
//       Authorization:localStorage.getItem("token"),
//     },
//   };
//   try {
//     const result = await axios.get("http://localhost:5000/api/user/current",opts);
//     return result.data;
//     console.log(result.data)
//   } catch (error) {
//     console.log(error)
//   }
// });


const initialState = {
  trajet: null,
  status: null,
};




export const trajetSlice = createSlice({
  name: "trajet",
  initialState,
  reducers: {},
  extraReducers: {
    [ajouterTrajet.pending]: (state) => {
      state.status = "pending";
    },
    [ajouterTrajet.fulfilled]: (state,action) => {
      state.status = "success";
      state.trajet = action.payload.response;
    },
    [ajouterTrajet.rejected]: (state) => {
      state.status = "fail";
    },
    [getAllTrajets.pending]: (state) => {
      state.status = "pending";
    },
    [getAllTrajets.fulfilled]: (state,action) => {
      state.status = "success";
      state.trajet = action.payload.response;
    },
    [getAllTrajets.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// export const {logout} = userSlice.actions;

export default trajetSlice.reducer;