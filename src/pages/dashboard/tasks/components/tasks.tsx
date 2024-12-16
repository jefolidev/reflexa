import checkDefaultEmoji from '../../../../assets/checklist/check-default.svg'

import depressionIcon from '../../../../assets/emojis-priority/depression.svg'
import excitedIcon from '../../../../assets/emojis-priority/excited.svg'
import happyIcon from '../../../../assets/emojis-priority/happy.svg'
import neutralIcon from '../../../../assets/emojis-priority/neutral.svg'
import unhappyIcon from '../../../../assets/emojis-priority/unhappy.svg'

type PriorityValues = 1 | 2 | 3 | 4 | 5

interface SimpleTaskCardProps {
  priorityLevel: PriorityValues
}

export function SimpleTaskCard({ priorityLevel }: SimpleTaskCardProps) {
  const priorityStyles: Record<PriorityValues, string> = {
    1: 'bg-red-800/60 text-red-400',
    2: 'bg-red-800/60 text-red-300',
    3: 'bg-yellow-600/60 text-yellow-300',
    4: 'bg-green-800/60 text-green-300',
    5: 'bg-green-800/60 text-green-400',
  }

  const styles = priorityStyles[priorityLevel]
  const emojisBasedOnPriority: Record<PriorityValues, string> = {
    5: excitedIcon,
    4: happyIcon,
    3: neutralIcon,
    2: unhappyIcon,
    1: depressionIcon,
  }

  return (
    <div className="flex flex-col w-72">
      <div className="flex justify-between items-center bg-stone-900 p-3.5 rounded-lg hover:bg-stone-800 hover:cursor-pointer">
        <img src={checkDefaultEmoji} alt="" />
        <span className="font-poppins text-sm text-white ">Arrumar a cama</span>
        <div className={`${styles} rounded-full w-12 flex justify-center`}>
          <img
            src={emojisBasedOnPriority[priorityLevel]}
            alt=""
            className="w-5 "
          />
          <span className="font-monts  text-green-300 font-bold text-sm p-1 ">
            5
          </span>
        </div>
      </div>
    </div>
  )
}
