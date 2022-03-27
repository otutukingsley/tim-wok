import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Logs } from "../reducers/reducers"
import { AppDispatch } from "../store/store"

export const increment = createAction("counter/increment")
export const decrement = createAction("counter/decrement")
export const incrementByAmount = createAction<number>(
  "counter/incrementByAmount"
)

export const getLogs = createAsyncThunk("log/getlogs", async () => {
  const { data } = await axios.get("http://localhost:5500/logs")
  return data
})

export const addLogs = createAsyncThunk<Logs, Logs>(
  "log/addlogs",
  async (formData) => {
    const { data } = await axios.post("http://localhost:5500/logs", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    return data as Logs
  }
)
