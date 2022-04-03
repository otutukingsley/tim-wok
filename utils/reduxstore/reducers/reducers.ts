import { createReducer } from "@reduxjs/toolkit"
import {
  decrement,
  increment,
  incrementByAmount,
  getLogs,
  addLogs,
  getMembers,
  resetCreated,
} from "../actions/actions"
import { LogState } from "../types/types"

const initialState: LogState = {
  value: 0,
  logs: [],
  pending: false,
  error: "",
  members: [],
  created: false,
}

const initialGetState: LogState = {
  value: 0,
  logs: [],
  pending: true,
  error: "",
  members: [],
  created: false,
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

export const logsReducer = createReducer(initialGetState, (builder) => {
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
      // state.logs = state.logs ? [payload, ...state.logs] : []
      state.created = true
    })
    .addCase(addLogs.rejected, (state, { error }) => {
      state.pending = false
      state.error = error.message
      state.created = true
    })
    .addCase(resetCreated, (state) => {
      state.created = false
    })
})

export const membersReducer = createReducer(initialGetState, (builder) => {
  builder
    .addCase(getMembers.pending, (state) => {
      state.pending = true
    })
    .addCase(getMembers.fulfilled, (state, { payload }) => {
      state.pending = false
      state.members = payload
    })
    .addCase(getMembers.rejected, (state, { error }) => {
      state.pending = false
      state.error = error.message
    })
})
