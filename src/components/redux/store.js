import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';
import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {
    books: booksReducer,
    cart:cartReducer,
  },
});

export default store;
