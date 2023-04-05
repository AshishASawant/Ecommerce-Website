import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('favourite')? JSON.parse(localStorage.getItem('favourite')) :[];

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    setFavourite: (state, action) => {
      return [...state, action.payload];
    },
    removeFavourite: (state, action) => {
      return state.filter((i) => {
        return i !== action.payload;
      });
    },
    getFavouriteFromUser:(state,action)=>{
      state=action.payload
  }
  },
});

export const { setFavourite, removeFavourite,getFavouriteFromUser } = favouriteSlice.actions;

export default favouriteSlice.reducer;
