import React from "react"
import { getMembers } from "../utils/reduxstore/actions/actions"
import { getMembersSelector } from "../utils/reduxstore/selectors/selectors"
import { useAppDispatch, useAppSelector } from "../utils/reduxstore/store/hooks"
import PreLoader from "./preloader"
const MembersListModal = () => {
  const dispatch = useAppDispatch()
  const { members, pending, error } = useAppSelector(getMembersSelector)
  React.useEffect(() => {
    dispatch(getMembers())
  }, [dispatch])
  return (
    <div id="members-list-modal" className="modal">
      <div className="modal-content">
        <h4>Members</h4>
        {pending && <div>Loading</div>}
        {error && <div>{error}</div>}
        {members && (
          <ul className="collection shadow">
            {members.map((member) => (
              <li key={member.id} className="collection-item custom-list">
                {member.firstName} {member.lastName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default MembersListModal
