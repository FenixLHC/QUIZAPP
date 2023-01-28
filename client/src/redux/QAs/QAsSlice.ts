import { createSlice } from '@reduxjs/toolkit'

export const QAsSlice = createSlice({
  name: 'QAs',
  initialState: {
    QAs: [],
  },
  reducers: {
    getAllQAs: (state, action) => {
      state.QAs = action.payload
    },

  }
})

export const { getAllQAs } = QAsSlice.actions

export default QAsSlice.reducer