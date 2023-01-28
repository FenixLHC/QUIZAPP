import { urlApiDb } from "../../API"
import { getAllQAs } from "./QAsSlice"

export const getQAs = () => {
    return async function (dispatch:any) {
      try {
        const response = await urlApiDb.get('QAs')
        return dispatch(getAllQAs(response.data))
      } catch (error:any) {
        console.log(error.message)
      }
    }
  }