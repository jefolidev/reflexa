import dayjs from 'dayjs'
import { ModalContent } from '../../../../../components/modal/content'
import { ModalHeader } from '../../../../../components/modal/header'
import { ModalRoot } from '../../../../../components/modal/root'
import { useGoals } from '../../../../../hooks/useGoals'
import { capitalizeMonth } from '../../../../../utils/capitalize-fn'

export function InformationPendingModal({ goalId }: { goalId: string }) {
  const { findGoalById } = useGoals()

  const goal = findGoalById(goalId)

  const statusFormated = goal.taskStatus === 'pending' ? 'Pendente' : ''

  return (
    <ModalRoot>
      <ModalHeader
        modalName="infoPendingModal"
        title="Informações da Tarefa"
        subtitle="Veja informações da sua tarefa."
      />
      <ModalContent>
        <div className="grid grid-cols-2 gap-4 py-2">
          <span className="text-white font-semibold text-lg">
            Nome da tarefa:{' '}
            <p className="text-gray-300 text-base font-normal">
              {' '}
              {goal.taskName}{' '}
            </p>
          </span>
          <span className="text-white font-semibold text-lg">
            Categoria da tarefa:{' '}
            <p className="text-gray-300 text-base font-normal">
              {' '}
              {goal.taskCategory}{' '}
            </p>
          </span>
          <span className="text-white font-semibold text-lg">
            Status da tarefa:{' '}
            <p className="text-gray-300 text-base font-normal">
              {' '}
              {statusFormated}{' '}
            </p>
          </span>
          <span className="text-white font-semibold text-lg">
            Criada em:{' '}
            <p className="text-gray-300 text-base font-normal">
              {capitalizeMonth(
                dayjs(goal.taskCreationDate),
                goal.taskCreationDate.getFullYear()
              )}
            </p>
          </span>
        </div>
      </ModalContent>
    </ModalRoot>
  )
}
