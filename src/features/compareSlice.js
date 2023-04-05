import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('compare')? JSON.parse(localStorage.getItem('compare')) :[];

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    setCompare: (state, action) => {
      return [...state, action.payload];
    },
    removeCompare: (state, action) => {
      return state.filter((i) => {
        return i !== action.payload;
      });
    },
    getCompareFromUser:(state,action)=>{
      // state=action.payload
  }
  },
});

export const { setCompare, removeCompare,getCompareFromUser } = compareSlice.actions;

export default compareSlice.reducer;
