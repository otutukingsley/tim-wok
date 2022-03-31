import type { NextPage } from "next"
import React from "react"
import { useAppDispatch, useAppSelector } from "../utils/reduxstore/store/hooks"
import {
  decrement,
  increment,
  incrementByAmount,
  getLogs,
  addLogs,
} from "../utils/reduxstore/actions/actions"
import {
  countSelector,
  getLogsSelector,
} from "../utils/reduxstore/selectors/selectors"
import Layout, { siteTitle } from "../components/layout"
// import Head from "next/head"
// import Image from "next/image"
import styles from "../styles/Home.module.css"
import LogItems from "../components/logitems"
import Loader from "../components/loader"

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const { value } = useAppSelector(countSelector)
  const { logs, pending, error } = useAppSelector(getLogsSelector)
  const [incrementAmount, setIncrementAmount] = React.useState<number>(0)

  React.useEffect(() => {
    dispatch(getLogs())
  }, [dispatch])
  return (
    <Layout>
      {/* <h1>Welcome to the greatest app in the world!</h1>
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
      </div> */}
      <div className="activity-heading-container">
        <h4 className="activity-heading center">Activity Logs</h4>
      </div>
      {pending ? (
        <div className="center">
          <Loader />
        </div>
      ) : error ? (
        <li className="collection-item">{error}</li>
      ) : (
        <ul className="collection shadow">
          {logs &&
            logs.map((log) => {
              return <LogItems key={log.id} logs={log} />
            })}
        </ul>
      )}
    </Layout>
  )
}

export default Home
