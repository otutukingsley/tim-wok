import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const increment = createAction("counter/increment")
export const decrement = createAction("counter/decrement")
export const incrementByAmount = createAction<number>(
  "counter/incrementByAmount"
)

export const getKanyeQuote = createAsyncThunk("kanye/kanyeQuote", async () => {
  const response = await axios.get("https://api.kanye.rest/")

  return response.data
})
