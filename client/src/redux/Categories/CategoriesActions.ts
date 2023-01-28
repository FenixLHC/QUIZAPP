import { urlApiDb } from "../../API"
import { getAllCategories } from "./CategoriesSlice"

export const getCategories = () => {
    return async function (dispatch:any) {
      try {
        const response = await urlApiDb.get('categories')
        return dispatch(getAllCategories(response.data))
      } catch (error:any) {
        console.log(error.message)
      }
    }
  }