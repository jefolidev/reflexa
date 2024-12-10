import { useState } from 'react'
import checkIcon from '../../../assets/check-default.svg'
import editIcon from '../../../assets/edit.svg'
import deleteIcon from '../../../assets/trash.svg'
import { ToolTip } from './tooltip'

export function DefaultTag() {
  const [activeToolTip, setActiveToolTip] = useState<string | null>(null)

  function setToolTipVisible(buttonId: string) {
    setActiveToolTip(buttonId)
  }
  function setToolTipInvisible() {
    setActiveToolTip(null)
  }

  return (
    <div className="relative flex gap-4">
      <ToolTip text="Excluir" isVisible={activeToolTip === 'delete'} />

      <button
        type="button"
        className="noStyleButton "
        onMouseEnter={() => setToolTipVisible('delete')}
        onMouseLeave={setToolTipInvisible}
        onFocus={() => {}}
      >
        <img src={deleteIcon} alt="" />
      </button>

      <ToolTip text="Editar" isVisible={activeToolTip === 'edit'} />
      <button
        type="button"
        className="noStyleButton "
        onMouseEnter={() => setToolTipVisible('edit')}
        onMouseLeave={setToolTipInvisible}
        onFocus={() => {}}
      >
        <img src={editIcon} alt="" />
      </button>

      <button type="button" className="noStyleButton ">
        <img src={checkIcon} alt="" />
      </button>
    </div>
  )
}
