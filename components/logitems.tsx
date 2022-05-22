import React, { FC } from "react"
import { Logs } from "../utils/reduxstore/types/types"
import { getLogId } from "../utils/reduxstore/actions/actions"
import { useAppDispatch } from "../utils/reduxstore/store/hooks"
import Moment from "react-moment"

type LogProps = {
  logs: Logs
}

const LogItems: FC<LogProps> = ({ logs }) => {
  const dispatch = useAppDispatch()
  return (
    <li className="collection-item custom-list">
      <div
        className={`custom-badge ${
          logs.type === "attention"
            ? "custom-badge-bg-red"
            : logs.type === "progress"
            ? "custom-badge-bg-orange"
            : logs.type === "done"
            ? "custom-badge-bg-green"
            : ""
        }`}
      ></div>

      <div className="log-content">
        <div>
          <a
            href="#view-log-modal"
            className="view-log modal-trigger"
            onClick={() => dispatch(getLogId(logs.id))}
          >
            {logs.title}
          </a>
          <span className="grey-text">
            <span className="black-text">#{logs.id}</span> last updated by{" "}
            <span className="black-text">{logs.member}</span> on{" "}
            <Moment format="ddd, MMM Do YYYY">{logs.date}</Moment>
          </span>
        </div>
        <div>
          <a
            href="#!"
            className="secondary-content"
            // onClick={() => dispatch(getLogId(logs.id))}
          >
            <i className="material-icons grey-text">delete</i>
          </a>
          <a
            href="#edit-log-modal"
            className="modal-trigger secondary-content"
            onClick={() => dispatch(getLogId(logs.id))}
          >
            <i className="material-icons grey-text">edit</i>
          </a>
        </div>
      </div>
    </li>
  )
}

export default LogItems
