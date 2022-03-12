import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Logs } from "../reducers/reducers"

export const increment = createAction("counter/increment")
export const decrement = createAction("counter/decrement")
export const incrementByAmount = createAction<number>(
  "counter/incrementByAmount"
)

export const getLogs = createAsyncThunk("log/getlogs", async (thunkAPI) => {
  const { data } = await axios.get("http://localhost:5500/logs")
  return data
})
