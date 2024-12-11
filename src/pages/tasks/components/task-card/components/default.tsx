import { useState } from 'react'
import uncheckedIcon from '../../../assets/check-default.svg'
import checkedIcon from '../../../assets/checked.svg'
import editIcon from '../../../assets/edit.svg'
import deleteIcon from '../../../assets/trash.svg'
import { ToolTip } from './tooltip'

export function DefaultTag() {
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false)
  const [activeToolTip, setActiveToolTip] = useState<string | null>(null)
  const [isButtonHovered, setButtonHovered] = useState<boolean>(false)

  function setToolTipVisible(buttonId: string) {
    setActiveToolTip(buttonId)
  }

  function setToolTipInvisible() {
    setActiveToolTip(null)
  }

  function clickButtonHandler() {
    setIsButtonActive((prevButtonState) => !prevButtonState)
  }

  function hoverButtonHandler() {
    setButtonHovered((prevButtonState) => !prevButtonState)
  }

  return (
    <div className="relative flex gap-4">
      <ToolTip text="Excluir" isVisible={activeToolTip === 'delete'} />

      <button
        type="button"
        className="noStyleButton hover:brightness-[0.75]"
        onMouseEnter={() => setToolTipVisible('delete')}
        onMouseLeave={setToolTipInvisible}
        onFocus={() => {}}
      >
        <img src={deleteIcon} alt="" />
      </button>

      <ToolTip text="Editar" isVisible={activeToolTip === 'edit'} />
      <button
        type="button"
        className="noStyleButton hover:brightness-[0.75]"
        onMouseEnter={() => setToolTipVisible('edit')}
        onMouseLeave={setToolTipInvisible}
        onFocus={() => {}}
      >
        <img src={editIcon} alt="" />
      </button>

      <button
        type="button"
        className="noStyleButton"
        onClick={clickButtonHandler}
        onMouseEnter={hoverButtonHandler}
        onMouseLeave={hoverButtonHandler}
      >
        {isButtonHovered ? (
          <img src={checkedIcon} alt="" className="w-6 opacity-75" />
        ) : (
          <img
            src={isButtonActive ? checkedIcon : uncheckedIcon}
            alt=""
            className="w-6"
          />
        )}
      </button>
    </div>
  )
}
