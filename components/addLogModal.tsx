import React, { ChangeEvent } from "react"
import { addLogs, getMembers } from "../utils/reduxstore/actions/actions"
import {
  getMembersSelector,
  addLogsSelector,
} from "../utils/reduxstore/selectors/selectors"
import { useAppDispatch, useAppSelector } from "../utils/reduxstore/store/hooks"
import PreLoader from "./preloader"

const AddLogModal = () => {
  const dispatch = useAppDispatch()
  const { members, pending, error } = useAppSelector(getMembersSelector)
  const { pending: addLogPending, created } = useAppSelector(addLogsSelector)

  const [modalState, setModalState] = React.useState<any>({
    description: "",
    title: "",
    type: "attention",
    member: "",
    date: new Date(),
  })

  const { description, title, type, member, date } = modalState

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setModalState({
      ...modalState,
      [event.target.name]: event.target.value,
    })
  }

  const onSubmit = () => {
    const M = require("materialize-css/dist/js/materialize")
    const formData = {
      title,
      description,
      type,
      member,
      date,
    }

    if (title === "" || description === "" || member === "") {
      M.toast({
        html: "Please enter a Title, Description and a Member",
        classes: "red",
      })
    } else {
      dispatch(addLogs(formData))
      M.toast({
        html: `Log added successfully by ${member}`,
        classes: "green",
      })
      setModalState({
        description: "",
        title: "",
        member: "",
        type: "attention",
      })
    }
  }

  React.useEffect(() => {
    dispatch(getMembers())
  }, [dispatch])

  return (
    <div id="add-log-modal" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4>Enter Activity Log</h4>
        <form>
          <div className="row">
            <div className="input-field">
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
              <label htmlFor="message" className="active">
                Log Title
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <textarea
                name="description"
                className="materialize-textarea"
                datalength="120"
                value={description}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="textarea2">Description</label>
            </div>
          </div>
          <div className="row">
            <label>Select Member</label>
            <div className="input-field col s12">
              <select
                value={member}
                name="member"
                onChange={handleChange}
                placeholder="Select Member"
                className="browser-default"
              >
                <option value="" disabled>
                  Select Member
                </option>
                {pending
                  ? ""
                  : error
                  ? error
                  : members?.map((member) => (
                      <option
                        key={member.id}
                        value={`${member.firstName} ${member.lastName}`}
                      >
                        {member.firstName} {member.lastName}
                      </option>
                    ))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <input
                type="radio"
                id="attention"
                name="type"
                value="attention"
                onChange={handleChange}
                checked={type === "attention"}
                className="attention-input"
              />
              <label htmlFor="attention" className="radio-label attention">
                Needs Attention
              </label>

              <input
                type="radio"
                id="progress"
                name="type"
                value="progress"
                onChange={handleChange}
                checked={type === "progress"}
                className="progress-input"
              />
              <label htmlFor="progress" className="radio-label progress-label">
                In Progress
              </label>

              <input
                type="radio"
                id="done"
                name="type"
                value="done"
                checked={type === "done"}
                onChange={handleChange}
                className="done-input"
              />
              <label htmlFor="done" className="radio-label done">
                Done
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect btn-flat back">
          Back
        </a>
        <a
          href="#!"
          className="modal-close btn-flat submit-btn"
          onClick={() => onSubmit()}
        >
          Add Log {addLogPending && <PreLoader />}
        </a>
      </div>
    </div>
  )
}

export default AddLogModal
