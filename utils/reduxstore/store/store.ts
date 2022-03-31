import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import {
  addLogsReducer,
  counterReducer,
  logsReducer,
  membersReducer,
} from "../reducers/reducers"

export const store = configureStore({
  reducer: {
    //This is where we add reducers
    counter: counterReducer,
    getLogs: logsReducer,
    addLogs: addLogsReducer,
    members: membersReducer,
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
