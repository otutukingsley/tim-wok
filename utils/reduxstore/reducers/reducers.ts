import { createReducer } from "@reduxjs/toolkit"
import {
  decrement,
  increment,
  incrementByAmount,
  getLogs,
  addLogs,
} from "../actions/actions"

export type Logs = {
  description: string
  title: string
  done: boolean
  inProgress: boolean
  needsAttention: boolean
  engineer: string
  date: string
  engineerId: any
  id?: any
}

export type LogState = {
  value: number
  logs?: Logs[]
  pending?: boolean
  error?: string
}

const initialState: LogState = {
  value: 0,
  logs: [],
  pending: false,
  error: "",
}

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value++
    })
    .addCase(decrement, (state) => {
      state.value--
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
})

export const logsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getLogs.pending, (state) => {
      state.pending = true
    })
    .addCase(getLogs.fulfilled, (state, { payload }) => {
      state.pending = false
      state.logs = payload
    })
    .addCase(getLogs.rejected, (state, { error }) => {
      state.pending = false
      state.error = error.message
    })
})

export const addLogsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addLogs.pending, (state) => {
      state.pending = true
    })
    .addCase(addLogs.fulfilled, (state, { payload }) => {
      state.pending = false
      state.logs = state.logs && [...state.logs, payload]
    })
    .addCase(addLogs.rejected, (state, { error }) => {
      state.pending = false
      state.error = error.message
    })
})
