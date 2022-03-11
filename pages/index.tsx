import type { NextPage } from "next"
import React from "react"
import { useAppDispatch, useAppSelector } from "../utils/reduxstore/store/hooks"
import {
  decrement,
  increment,
  incrementByAmount,
  getKanyeQuote,
} from "../utils/reduxstore/actions/actions"
import {
  countSelector,
  kanyeQuoteSelector,
} from "../utils/reduxstore/selectors/selectors"
// import Head from "next/head"
// import Image from "next/image"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const { value } = useAppSelector(countSelector)
  const { data, pending, error } = useAppSelector(kanyeQuoteSelector)
  const [incrementAmount, setIncrementAmount] = React.useState<number>(0)
  return (
    <>
      <h1>Welcome to the greatest app in the world!</h1>
      <h2>
        The current number is
        {value}
      </h2>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
      <br />
      <br />
      <br />
      <>
        <div>
          <h2>Generate random Kanye West quote</h2>
          {pending && <p>Loading...</p>}
          {data && <p>{data.quote}</p>}
          {error && <p>Oops, something went wrong</p>}
          <button onClick={() => dispatch(getKanyeQuote())} disabled={pending}>
            Generate Kanye Quote
          </button>
        </div>
      </>
    </>
  )
}

export default Home
