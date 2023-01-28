import { configureStore } from '@reduxjs/toolkit'
import Categories from './Categories/CategoriesSlice'
import QAs from './QAs/QAsSlice'

export default configureStore({
  reducer: {
    Categories,
    QAs
  }
})