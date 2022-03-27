import React from "react"

const AddLogModal = () => {
  return (
    <div id="add-log-modal" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4>Enter Activity Log</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="message" />
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
              data-length="120"
            ></textarea>
            <label htmlFor="textarea2">Description</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select>
              <option value="" disabled selected>
                Select Member
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Select Member</label>
          </div>
        </div>
        <div className="row">
          <div className="box">
            <input type="radio" id="radio1" name="radio1" />
            <label htmlFor="radio1">Crazy Option</label>

            <input type="radio" id="radio2" name="radio1" />
            <label htmlFor="radio2">Freaky Option</label>

            <input type="radio" id="radio3" name="radio1" />
            <label htmlFor="radio3">Cat Option</label>

            <input type="radio" id="radio4" name="radio1" disabled />
            <label htmlFor="radio4">Not an option</label>
          </div>
          <p>Really nothing special.</p>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Agree
        </a>
      </div>
    </div>
  )
}

export default AddLogModal
