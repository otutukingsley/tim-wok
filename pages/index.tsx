import type { NextPage } from "next"
import React from "react"
import { useAppDispatch, useAppSelector } from "../utils/reduxstore/store/hooks"
import {
  clearCurrent,
  getLogs,
  resetCreated,
  resetMessage,
} from "../utils/reduxstore/actions/actions"
import {
  getLogsSelector,
  addLogsSelector,
  editLogSelector,
  getSingleLogSelector,
  deleteLogSelector,
} from "../utils/reduxstore/selectors/selectors"
import Layout from "../components/layout"
import LogItems from "../components/logitems"
import Loader from "../components/loader"

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const { logs, pending, error } = useAppSelector(getLogsSelector)
  const { created } = useAppSelector(addLogsSelector)
  const { created: edited } = useAppSelector(editLogSelector)
  const { current } = useAppSelector(getSingleLogSelector)
  const { message } = useAppSelector(deleteLogSelector)

  React.useEffect(() => {
    if (created || edited || message || (logs?.length === 0 && pending)) {
      dispatch(resetCreated())
      dispatch(clearCurrent())
      dispatch(resetMessage())
      dispatch(getLogs())
    }
  }, [dispatch, created, edited, message, logs?.length, pending])

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
          {logs?.length ? (
            [...logs]
              .sort((a, b) => (a.date > b.date ? 1 : -1))
              .map((log) => {
                return <LogItems key={log.id} logs={log} />
              })
          ) : (
            <li className="collection-item custom-list">
              <h4 className="text-center unbold">No Activity Logs Available</h4>
            </li>
          )}
        </ul>
      )}
    </Layout>
  )
}

export default Home
