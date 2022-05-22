import React from "react"
import { getSingleLog, resetId } from "../utils/reduxstore/actions/actions"
import { getSingleLogSelector } from "../utils/reduxstore/selectors/selectors"
import { useAppDispatch, useAppSelector } from "../utils/reduxstore/store/hooks"
import Moment from "react-moment"

const ViewLogModal = () => {
  const dispatch = useAppDispatch()
  const { id, pending, error, log } = useAppSelector(getSingleLogSelector)

  React.useEffect(() => {
    if (id) {
      dispatch(getSingleLog(id))
      dispatch(resetId())
    }
  }, [dispatch, id])

  return (
    <div id="view-log-modal" className="modal">
      <div className="modal-content">
        {pending && <div>Loading</div>}
        {log && (
          <>
            <div className="title-badge">
              <i className="material-icons grey-text">dashboard</i>
            </div>
            <div className="log-card-title-wrapper">
              <h3 className="log-card-title">{log.title}</h3>
              <span className="grey-text">
                last updated by{" "}
                <span className="black-text log-card-member">{log.member}</span>{" "}
                on <Moment format="ddd, MMM Do YYYY">{log.date}</Moment>
              </span>
            </div>
            <div className="log-card-status">
              <h6 className="log-card-status-title">Status</h6>
              <div className="status-box">
                <span
                  className={`status-box-tag ${
                    log.type === "done"
                      ? "log-card-status-done"
                      : log.type === "progress"
                      ? "log-card-status-progress"
                      : "log-card-status-attention"
                  }`}
                >
                  {log.type === "progress"
                    ? "In"
                    : log.type === "attention"
                    ? "Needs"
                    : ""}{" "}
                  {log.type}
                </span>
              </div>
            </div>
            <div className="log-card-description">
              <div className="title-badge">
                <i className="material-icons grey-text">description</i>
              </div>
              <h6 className="desc-header">Description</h6>
            </div>
            <div className="log-card-desc-content">{log.description}</div>
          </>
        )}
      </div>
    </div>
  )
}

export default ViewLogModal
