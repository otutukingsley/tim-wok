import type { NextPage } from "next"
import React from "react"
import { useAppDispatch, useAppSelector } from "../utils/reduxstore/store/hooks"
import { getLogs, resetCreated } from "../utils/reduxstore/actions/actions"
import {
  getLogsSelector,
  addLogsSelector,
} from "../utils/reduxstore/selectors/selectors"
import Layout from "../components/layout"
import LogItems from "../components/logitems"
import Loader from "../components/loader"

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const { logs, pending, error } = useAppSelector(getLogsSelector)
  const { created } = useAppSelector(addLogsSelector)

  React.useEffect(() => {
    if (created || (logs?.length === 0 && pending)) {
      dispatch(resetCreated())
      dispatch(getLogs())
    }
  }, [dispatch, created, logs?.length, pending])

  return (
    <Layout>
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
            [...logs]
              .sort((a, b) => (a.date > b.date ? -1 : 1))
              .map((log) => {
                return <LogItems key={log.id} logs={log} />
              })}
        </ul>
      )}
    </Layout>
  )
}

export default Home
