import checkIcon from '../../../assets/check-default.svg'
import editIcon from '../../../assets/edit.svg'
import deleteIcon from '../../../assets/trash.svg'

export function DefaultTag() {
  return (
    <>
      <button type="button" className="noStyleButton">
        <img src={deleteIcon} alt="" />
      </button>
      <button type="button" className="noStyleButton">
        <img src={editIcon} alt="" />
      </button>
      <button type="button" className="noStyleButton">
        <img src={checkIcon} alt="" />
      </button>
    </>
  )
}
