import React from "react"
import { deleteLogs } from "../utils/reduxstore/actions/actions"
import { getSingleLogSelector } from "../utils/reduxstore/selectors/selectors"
import { useAppSelector, useAppDispatch } from "../utils/reduxstore/store/hooks"

const DeleteLogModal = () => {
  const { current } = useAppSelector(getSingleLogSelector)
  const dispatch = useAppDispatch()
  const [id, setId] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (current) {
      setId(current.id)
    }
  }, [current])

  const deleteLog = (id: any) => {
    const M = require("materialize-css/dist/js/materialize")
    dispatch(deleteLogs(id))
    M.toast({
      html: `Log deleted successfully`,
      classes: "red",
    })
  }

  return (
    <div id="delete-log-modal" className="modal">
      <div className="modal-content">
        Are you sure you want to delete this log?? This action can not be
        undone!
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect btn-flat back">
          cancel
        </a>
        <a
          href="#!"
          className="modal-close btn-flat submit-btn"
          onClick={() => deleteLog(id)}
        >
          Delete
        </a>
      </div>
    </div>
  )
}

export default DeleteLogModal
