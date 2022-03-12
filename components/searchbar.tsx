import React, { FC } from "react"

const searchbar: FC = () => {
  return (
    <nav className="mb-3 orange">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input type="search" id="search" placeholder="Search Logs..." />
            <label htmlFor="search" className="label-icon">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default searchbar
