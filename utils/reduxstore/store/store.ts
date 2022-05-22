import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import {
  addLogsReducer,
  logsReducer,
  membersReducer,
  singleLogReducer,
  editLogReducer,
  deleteLogReducer,
} from "../reducers/reducers"

export const store = configureStore({
  reducer: {
    //This is where we add reducers
    getLogs: logsReducer,
    addLogs: addLogsReducer,
    members: membersReducer,
    singleLog: singleLogReducer,
    editLog: editLogReducer,
    deleteLog: deleteLogReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
