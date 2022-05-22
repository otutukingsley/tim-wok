import { createReducer } from "@reduxjs/toolkit"
import {
  getLogs,
  addLogs,
  getMembers,
  resetCreated,
  editLogs,
  setCurrent,
} from "../actions/actions"
import { LogState, Logs } from "../types/types"

const initialState: LogState = {
  logs: [],
  pending: false,
  error: "",
  members: [],
  created: false,
  current: {} as Logs,
}

const initialGetState: LogState = {
  logs: [],
  pending: true,
  error: "",
  members: [],
  created: false,
}

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
    .addCase(addLogs.fulfilled, (state) => {
      state.pending = false
      state.created = true
    })
    .addCase(addLogs.rejected, (state, { error }) => {
      state.pending = false
      state.error = error.message
      state.created = false
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

export const singleLogReducer = createReducer(initialGetState, (builder) => {
  builder.addCase(setCurrent, (state, { payload }) => {
    state.current = payload
  })
})

export const editLogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(editLogs.pending, (state) => {
      state.pending = true
    })
    .addCase(editLogs.fulfilled, (state) => {
      state.pending = false
      state.created = true
    })
    .addCase(editLogs.rejected, (state, { error }) => {
      state.pending = false
      state.error = error.message
      state.created = false
    })
    .addCase(resetCreated, (state) => {
      state.created = false
    })
})
