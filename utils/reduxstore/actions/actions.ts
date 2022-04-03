import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Logs, Members } from "../types/types"
import { AppDispatch } from "../store/store"

export const increment = createAction("counter/increment")
export const decrement = createAction("counter/decrement")
export const incrementByAmount = createAction<number>(
  "counter/incrementByAmount"
)
export const resetCreated = createAction("log/resetAdd")

export const getLogs = createAsyncThunk("log/getlogs", async () => {
  const { data } = await axios.get("http://localhost:5500/logs")
  return data as Logs[]
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

export const getMembers = createAsyncThunk("members/getmembers", async () => {
  const { data } = await axios.get("http://localhost:5500/members")
  return data as Members[]
})
