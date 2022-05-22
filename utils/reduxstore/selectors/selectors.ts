import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store/store"

//Logs Selector
export const getLogs = (state: RootState) => state.getLogs
export const getLogsSelector = createSelector(getLogs, (state) => state)

//addLogs Selector
export const addLogs = (state: RootState) => state.addLogs
export const addLogsSelector = createSelector(addLogs, (state) => state)

//getMembers Selector
export const getMembers = (state: RootState) => state.members
export const getMembersSelector = createSelector(getMembers, (state) => state)

//getSingleLog Selector
export const getSingleLog = (state: RootState) => state.singleLog
export const getSingleLogSelector = createSelector(
  getSingleLog,
  (state) => state
)

//editLog Selector
export const editLog = (state: RootState) => state.editLog
export const editLogSelector = createSelector(editLog, (state) => state)

//deleteLog Selector
export const deleteLog = (state: RootState) => state.deleteLog
export const deleteLogSelector = createSelector(deleteLog, (state) => state)
