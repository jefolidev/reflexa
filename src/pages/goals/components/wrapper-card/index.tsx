import { type ReactNode, useState } from 'react'

import { TaskCounter } from './components/tasks-counter'

import arrow from '../../assets/arrow.svg'

interface WeeklyWrapperCard {
  children: ReactNode
  goalsDate: string
  hasStatus?: boolean
  completedTasks?: number
  uncompletedTasks?: number
  isOpen?: boolean
}

export function WeeklyWrapperCard({
  children,
  goalsDate,
  hasStatus = false,
  completedTasks,
  uncompletedTasks,
  isOpen = true,
}: WeeklyWrapperCard) {
  const [isCardWrapperOpen, setIsCardWrapperOpen] = useState(isOpen)

  const cardContentVisibility = !isCardWrapperOpen ? 'invisible' : 'visible'
  const cardSizeStyle = isCardWrapperOpen ? '' : 'h-16'
  const arrowTurnDown = isCardWrapperOpen ? 'rotate-90' : ''

  function switchWrapperState() {
    setIsCardWrapperOpen((prevState) => !prevState)
  }

  return (
    <div
      className={`${cardSizeStyle} flex py-3 bg-stone-950/75 flex-col rounded-xl `}
    >
      <header className="px-6 py-3 flex justify-between">
        <h2>{goalsDate}</h2>
        <div className="flex gap-4">
          {hasStatus ? (
            <TaskCounter
              completedTasks={completedTasks}
              uncompletedTasks={uncompletedTasks}
            />
          ) : (
            ''
          )}
          <button
            type="button"
            className="noStyleButton"
            onClick={switchWrapperState}
          >
            <img src={arrow} alt="" className={`${arrowTurnDown}`} />
          </button>
        </div>
      </header>
      <main className={`flex flex-col gap-4 px-2 ${cardContentVisibility}`}>
        {children}
      </main>
    </div>
  )
}
