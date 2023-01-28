import { createSlice } from '@reduxjs/toolkit'

export const CategoriesSlice = createSlice({
  name: 'Categories',
  initialState: {
    categories: [],
  },
  reducers: {
    getAllCategories: (state, action) => {
      state.categories = action.payload
    },

  }
})

export const { getAllCategories } = CategoriesSlice.actions

export default CategoriesSlice.reducer
