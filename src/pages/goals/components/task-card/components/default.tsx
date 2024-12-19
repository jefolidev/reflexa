import { useState } from 'react'
import { useGoals } from '../../../../../hooks/useGoals'
import { useModal } from '../../../../../hooks/useModal'
import uncheckedIcon from '../../../assets/check-default.svg'
import checkedIcon from '../../../assets/checked.svg'
import editIcon from '../../../assets/edit.svg'
import deleteIcon from '../../../assets/trash.svg'
import { EditGoalModal } from '../../modals/edit-modal'
import { ToolTip } from './tooltip'

interface DefaultTagProps {
  taskId: string
}

export function DefaultTag({ taskId }: DefaultTagProps) {
  const [activeToolTip, setActiveToolTip] = useState<string | null>(null)
  const [isButtonHovered, setButtonHovered] = useState<boolean>(false)

  const { setGoalAsFinished, removeCurrentGoal, goals } = useGoals()
  const { editModalVisibility, switchTheEditGoalModalState } = useModal()

  function setToolTipVisible(buttonId: string) {
    setActiveToolTip(buttonId)
  }

  function setToolTipInvisible() {
    setActiveToolTip(null)
  }

  function clickButtonHandler(id: string) {
    setGoalAsFinished(id)
  }

  function hoverButtonHandler() {
    setButtonHovered((prevButtonState) => !prevButtonState)
  }

  function removeTask() {
    const goalToRemove = goals.find((goal) => goal.id === taskId)
    if (goalToRemove) removeCurrentGoal(goalToRemove)
  }

  return (
    <div className="relative flex gap-4">
      <EditGoalModal
        visibility={editModalVisibility}
        turnTheModalState={switchTheEditGoalModalState}
        taskId={taskId}
      />

      <ToolTip text="Excluir" isVisible={activeToolTip === 'delete'} />

      <button
        type="button"
        className="noStyleButton hover:brightness-[0.75]"
        onClick={removeTask}
        onMouseEnter={() => setToolTipVisible('delete')}
        onMouseLeave={setToolTipInvisible}
      >
        <img src={deleteIcon} alt="" />
      </button>

      <ToolTip text="Editar" isVisible={activeToolTip === 'edit'} />
      <button
        type="button"
        className="noStyleButton hover:brightness-[0.75]"
        onMouseEnter={() => setToolTipVisible('edit')}
        onMouseLeave={setToolTipInvisible}
        onClick={switchTheEditGoalModalState}
      >
        <img src={editIcon} alt="" />
      </button>

      <button
        type="button"
        className="noStyleButton"
        onClick={() => clickButtonHandler(taskId)}
        onMouseEnter={hoverButtonHandler}
        onMouseLeave={hoverButtonHandler}
      >
        {isButtonHovered ? (
          <img src={checkedIcon} alt="" className="w-6 opacity-75" />
        ) : (
          <img src={uncheckedIcon} alt="" className="w-6" />
        )}
      </button>
    </div>
  )
}
