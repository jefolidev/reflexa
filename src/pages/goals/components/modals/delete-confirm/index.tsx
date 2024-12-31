import { ModalButton } from '../../../../../components/modal/button'
import { ModalHeader } from '../../../../../components/modal/header'
import { ModalRoot } from '../../../../../components/modal/root'
import { useGoals } from '../../../../../hooks/useGoals'

interface DeleteConfirmModalProps {
  taskId: string
}

export function DeleteConfirmModal({ taskId }: DeleteConfirmModalProps) {
  const { goals } = useGoals()
  // const { goals, removeCurrentGoal } = useGoals()
  //   const { toggleModalState } = useModal()

  function removeTask(id: string) {
    console.log('Tarefa recebdia ', id)
    const goalToRemove = goals.find((goal) => goal.id === taskId)
    console.log('Tarefa a se remover: ', goalToRemove)
    // if (goalToRemove) removeCurrentGoal(goalToRemove.id)
    // toggleModalState('deleteModal')
  }

  return (
    <ModalRoot>
      <ModalHeader
        title="Excluir esta tarefa?"
        subtitle="Essa ação não pode ser desfeita. Tem certeza que deseja continuar?"
        modalName="deleteModal"
      />
      <ModalButton variant="choice" onClick={() => removeTask(taskId)} />
    </ModalRoot>
  )
}
