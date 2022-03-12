import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store/store"

//Count Selector
export const selectCount = (state: RootState) => state.counter
export const countSelector = createSelector(selectCount, (state) => state)

//Logs Selector
export const selectLogs = (state: RootState) => state.logs
export const logsSelector = createSelector(selectLogs, (state) => state)
