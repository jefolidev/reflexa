import depressionIcon from '../../../../assets/emojis-priority/depression.svg'
import excitedIcon from '../../../../assets/emojis-priority/excited.svg'
import happyIcon from '../../../../assets/emojis-priority/happy.svg'
import neutralIcon from '../../../../assets/emojis-priority/neutral.svg'
import unhappyIcon from '../../../../assets/emojis-priority/unhappy.svg'

interface TaskPriorityProps {
  priorityLevel: number
}

export function TaskPriority({ priorityLevel }: TaskPriorityProps) {
  const priorityStyles: Record<number, string> = {
    1: 'bg-red-800/60 text-red-400',
    2: 'bg-red-800/60 text-red-300',
    3: 'bg-yellow-600/60 text-yellow-300',
    4: 'bg-green-800/60 text-green-300',
    5: 'bg-green-800/60 text-green-400',
  }

  const styles = priorityStyles[priorityLevel]
  const emojisBasedOnPriority: Record<number, string> = {
    5: excitedIcon,
    4: happyIcon,
    3: neutralIcon,
    2: unhappyIcon,
    1: depressionIcon,
  }

  return (
    <div
      className={`flex ${styles} rounded-full w-16 h-7 justify-center gap-2 items-center p-1`}
    >
      <img src={emojisBasedOnPriority[priorityLevel]} alt="" className="w-5 " />
      <span className="font-monts font-medium text-lg">{priorityLevel}</span>
    </div>
  )
}
