import React from "react"

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large orange darken-2 modal-trigger tooltipped"
        data-position="left"
        data-tooltip="Add Log"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#members-list-modal"
            className="btn-floating green modal-trigger tooltipped"
            data-position="left"
            data-tooltip="Members"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a
            href="#add-members-modal"
            className="btn-floating red modal-trigger tooltipped"
            data-position="left"
            data-tooltip="Add a Member"
          >
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AddBtn
