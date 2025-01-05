import { ModalButton } from '../../../../../components/modal/button'
import { ModalHeader } from '../../../../../components/modal/header'
import { ModalRoot } from '../../../../../components/modal/root'
import type { GoalsProps } from '../../../../../contexts/goals-context'
import { useGoals } from '../../../../../hooks/useGoals'

interface DeleteConfirmModalProps {
  goal?: GoalsProps
}

export function DeleteConfirmModal({ goal }: DeleteConfirmModalProps) {
  const { removeCurrentGoal } = useGoals()

  function handleDeleteGoal() {
    console.log(goal!.id)
    removeCurrentGoal(goal!)
  }

  return (
    <ModalRoot>
      <ModalHeader
        title="Excluir esta tarefa?"
        subtitle="Essa ação não pode ser desfeita. Tem certeza que deseja continuar?"
        modalName="deleteModal"
      />
      <ModalButton variant="choice" onClick={handleDeleteGoal} />
    </ModalRoot>
  )
}
