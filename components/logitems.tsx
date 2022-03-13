import React, { FC } from "react"
import { Logs } from "../utils/reduxstore/reducers/reducers"
import Moment from "react-moment"

type LogProps = {
  logs: Logs
}

const LogItems: FC<LogProps> = ({ logs }) => {
  return (
    <li className="collection-item custom-list">
      <div
        className={`custom-badge ${
          logs.needsAttention
            ? "custom-badge-bg-red"
            : logs.inProgress
            ? "custom-badge-bg-orange"
            : logs.done
            ? "custom-badge-bg-green"
            : ""
        }`}
      ></div>

      <div className="log-content">
        <div>
          <a href="#view-log-modal" className="modal-trigger view-log">
            {logs.title}
          </a>
          <span className="grey-text">
            <span className="black-text">#{logs.id}</span> last updated by{" "}
            <span className="black-text">{logs.engineer}</span> on{" "}
            <Moment format="ddd, MMM Do YYYY">{logs.date}</Moment>
          </span>
        </div>
        <div>
          <a href="#!" className="secondary-content">
            <i className="material-icons grey-text">delete</i>
          </a>
          <a href="#edit-log-modal" className="modal-trigger secondary-content">
            <i className="material-icons grey-text">edit</i>
          </a>
        </div>
      </div>
    </li>
  )
}

export default LogItems
