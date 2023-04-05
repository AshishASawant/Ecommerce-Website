import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { item: [], cartTotal: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let data = { id: action.payload.id, quantity: action.payload.quantity };
      state.item.push(data);
    },
    removeFromCart: (state, action) => {
      state.item = state.item.filter((val) => {
        return val.id !== action.payload;
      });
    },
    increaseQuatity: (state, action) => {
      for (let i = 0; i < state.item.length; i++) {
        if (state.item[i].id === action.payload) {
          state.item[i].quantity++;
        }
      }
    },
    decreaseQuatity: (state, action) => {
      for (let i = 0; i < state.item.length; i++) {
        if (state.item[i].id === action.payload) {
          if (state.item[i].quantity > 1) {
            state.item[i].quantity--;
          }
        }
      }
    },
    setCartTotal: (state, action) => {
      state.cartTotal =action.payload;
      state.cartTotal =parseFloat(action.payload).toFixed(2);
    },
    getCartFromUser: (state, action) => {
      state = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuatity,
  decreaseQuatity,
  deleteFromCart,
  setCartTotal,
  
} = cartSlice.actions;

export default cartSlice.reducer;
