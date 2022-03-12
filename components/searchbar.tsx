import React, { FC } from "react"

const searchbar: FC = () => {
  return (
    <nav
      className="orange"
      style={{
        position: "fixed",
        zIndex: "9999",
        top: "0",
        left: "0",
      }}
    >
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
