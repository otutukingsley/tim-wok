import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Logs, Members } from "../types/types"

export const resetCreated = createAction("log/resetAdd")
export const resetMessage = createAction("log/resetMessage")

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

export const getLogId = createAction<number | undefined>("logs/getlogsid")

export const setCurrent = createAction<Logs>("logs/setcurrent")
export const clearCurrent = createAction("log/resetCurrent")

export const editLogs = createAsyncThunk<Logs, Logs>(
  "log/editlogs",
  async (formData) => {
    const { id } = formData
    const { title, description, type, member, date } = formData
    const formObj = { title, description, type, member, date }
    const { data } = await axios.put(
      `http://localhost:5500/logs/${id}`,
      formObj,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    return data as Logs
  }
)

export const deleteLogs = createAsyncThunk("log/editlogs", async (id: any) => {
  const response = await axios.delete(`http://localhost:5500/logs/${id}`)
  response.data.message = "Log deleted successfully"
  return response.data.message as string
})
