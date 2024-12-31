import checkDefaultEmoji from '../../../../assets/checklist/check-default.svg'

import depressionIcon from '../../../../assets/emojis-priority/depression.svg'
import excitedIcon from '../../../../assets/emojis-priority/excited.svg'
import happyIcon from '../../../../assets/emojis-priority/happy.svg'
import neutralIcon from '../../../../assets/emojis-priority/neutral.svg'
import unhappyIcon from '../../../../assets/emojis-priority/unhappy.svg'
import { useGoals } from '../../../../hooks/useGoals'

export function SimpleTaskCard() {
  const { goals, setGoalAsFinished } = useGoals()
  const priorityStyles: Record<number, string> = {
    1: 'bg-red-800/60 text-red-400',
    2: 'bg-red-800/60 text-red-300',
    3: 'bg-yellow-600/60 text-yellow-300',
    4: 'bg-green-800/60 text-green-300',
    5: 'bg-green-800/60 text-green-400',
  }

  const emojisBasedOnPriority: Record<number, string> = {
    5: excitedIcon,
    4: happyIcon,
    3: neutralIcon,
    2: unhappyIcon,
    1: depressionIcon,
  }

  const ordenedGoals = goals.slice(0, 4).sort((a, b) => {
    if (a.taskPriority < b.taskPriority) return 1
    if (a.taskPriority > b.taskPriority) return -1
    return 0
  })

  return (
    <div className="flex flex-col w-72 justify-around">
      {ordenedGoals.map((goal) => (
        <button
          key={goal.id}
          type="button"
          onClick={() => setGoalAsFinished(goal.id)}
          className="flex justify-between items-center bg-stone-900 px-3.5 py-5 rounded-lg hover:bg-stone-800 hover:cursor-pointer"
        >
          <div className="flex gap-4  ">
            <img src={checkDefaultEmoji} alt="" />

            <span className="font-poppins text-sm text-white ">
              {goal.taskName}
            </span>
          </div>
          <div
            className={`${priorityStyles[goal.taskPriority]} rounded-full w-12 flex justify-center`}
          >
            <img
              src={emojisBasedOnPriority[goal.taskPriority]}
              alt=""
              className="w-5 "
            />
            <span className="font-monts text-white font-semibold text-sm p-1 ">
              {goal.taskPriority}
            </span>
          </div>
        </button>
      ))}
    </div>
  )
}
