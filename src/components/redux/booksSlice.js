import { createSlice } from '@reduxjs/toolkit';
import booksData from '../../context/apiData';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
  },
  reducers: {
    setBooks(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setBooks } = booksSlice.actions;

export const fetchBooks = () => (dispatch) => {
  dispatch(setBooks(booksData));
};

export default booksSlice.reducer;
