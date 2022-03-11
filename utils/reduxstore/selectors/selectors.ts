import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store/store"

//Count Selector
export const selectCount = (state: RootState) => state.counter
export const countSelector = createSelector(selectCount, (state) => state)

// Quote Selector
export const selectQuote = (state: RootState) => state.kanye
export const kanyeQuoteSelector = createSelector(selectQuote, (state) => state)
