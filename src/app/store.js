import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import favouriteReducer from '../features/favouriteSlice'
import cartReducer from '../features/cartSlice'
import compareReducer from '../features/compareSlice'

export const store = configureStore({
  reducer: {
    product:productReducer,
    favourite:favouriteReducer,
    cart:cartReducer,
    compare:compareReducer
  },

});





