import React from "react"
import { getSingleLogSelector } from "../utils/reduxstore/selectors/selectors"
import { useAppSelector } from "../utils/reduxstore/store/hooks"
import Moment from "react-moment"

const ViewLogModal = () => {
  const { current } = useAppSelector(getSingleLogSelector)

  return (
    <div id="view-log-modal" className="modal">
      <div className="modal-content">
        {current && (
          <>
            <div className="title-badge">
              <i className="material-icons grey-text">dashboard</i>
            </div>
            <div className="log-card-title-wrapper">
              <h3 className="log-card-title">{current.title}</h3>
              <span className="grey-text">
                last updated by{" "}
                <span className="black-text log-card-member">
                  {current.member}
                </span>{" "}
                on <Moment format="ddd, MMM Do YYYY">{current.date}</Moment>
              </span>
            </div>
            <div className="log-card-status">
              <h6 className="log-card-status-title">Status</h6>
              <div className="status-box">
                <span
                  className={`status-box-tag ${
                    current.type === "done"
                      ? "log-card-status-done"
                      : current.type === "progress"
                      ? "log-card-status-progress"
                      : "log-card-status-attention"
                  }`}
                >
                  {current.type === "progress"
                    ? "In"
                    : current.type === "attention"
                    ? "Needs"
                    : ""}{" "}
                  {current.type}
                </span>
              </div>
            </div>
            <div className="log-card-description">
              <div className="title-badge">
                <i className="material-icons grey-text">description</i>
              </div>
              <h6 className="desc-header">Description</h6>
            </div>
            <div className="log-card-desc-content">{current.description}</div>
          </>
        )}
      </div>
    </div>
  )
}

export default ViewLogModal
