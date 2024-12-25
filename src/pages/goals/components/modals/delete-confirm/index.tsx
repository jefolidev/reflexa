import { ModalButton } from '../../../../../components/modal/button'
import { ModalHeader } from '../../../../../components/modal/header'
import { ModalRoot } from '../../../../../components/modal/root'
import { useGoals } from '../../../../../hooks/useGoals'
import { useModal } from '../../../../../hooks/useModal'

interface DeleteConfirmModalProps {
  taskId: string
}

export function DeleteConfirmModal({ taskId }: DeleteConfirmModalProps) {
  const { goals, removeCurrentGoal } = useGoals()
  const { toggleModalState } = useModal()

  function removeTask() {
    const goalToRemove = goals.find((goal) => goal.id === taskId)
    if (goalToRemove) removeCurrentGoal(goalToRemove)
    toggleModalState('deleteModal')
  }

  return (
    <ModalRoot>
      <ModalHeader
        title="Excluir esta tarefa?"
        subtitle="Essa ação não pode ser desfeita. Tem certeza que deseja continuar?"
        modalName="deleteModal"
      />
      <ModalButton variant="choice" onClick={removeTask} />
    </ModalRoot>
  )
}
