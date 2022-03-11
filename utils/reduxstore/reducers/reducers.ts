import { createReducer } from "@reduxjs/toolkit"
import {
  decrement,
  increment,
  incrementByAmount,
  getKanyeQuote,
} from "../actions/actions"

type CounterState = {
  value: number
  data?: {
    quote: string
  }
  pending?: boolean
  error?: boolean
}

const initialState: CounterState = {
  value: 0,
  data: { quote: "click that button" },
  pending: false,
  error: false,
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

export const kanyeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getKanyeQuote.pending, (state) => {
      state.pending = true
    })
    .addCase(getKanyeQuote.fulfilled, (state, { payload }) => {
      state.pending = false
      state.data = payload
    })
    .addCase(getKanyeQuote.rejected, (state) => {
      state.pending = false
      state.error = true
    })
})
