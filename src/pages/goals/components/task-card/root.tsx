import { useModal } from '../../../../hooks/useModal'
import { InformationPendingModal } from '../modals/info-modal/pending-modal'

interface TaskRootProps {
  children: React.ReactNode
  goalId?: string
}

export function TaskRoot({ children, goalId }: TaskRootProps) {
  const { isModalVisible, toggleModalState } = useModal()

  function handleChangeModalState() {
    if (goalId === undefined) {
      return
    }

    return toggleModalState('infoPendingModal')
  }

  const hoverStyle =
    goalId === undefined ? '' : 'cursor-pointer hover:bg-zinc-900/80'

  return (
    <>
      {isModalVisible('infoPendingModal') && (
        <InformationPendingModal goalId={goalId!} />
      )}

      <div
        className={`flex bg-zinc-900 py-4 px-6 rounded-lg justify-between items-center  ${hoverStyle}`}
        onClick={handleChangeModalState}
      >
        {children}
      </div>
    </>
  )
}
