import type { ReactNode } from 'react'
import { TaskCounter } from './components/tasks-counter'

interface WeeklyWrapperCard {
  children: ReactNode
  hasStatus?: boolean
  completedTasks?: number
  uncompletedTasks?: number
}

export function WeeklyWrapperCard({
  children,
  hasStatus = false,
  completedTasks,
  uncompletedTasks,
}: WeeklyWrapperCard) {
  return (
    <div className="flex py-2 bg-stone-950/75 flex-col rounded-xl">
      <header className="px-6 p-3 flex justify-between">
        <h2>04 Dez, 2024</h2>
        {hasStatus ? (
          <TaskCounter
            completedTasks={completedTasks}
            uncompletedTasks={uncompletedTasks}
          />
        ) : (
          ''
        )}
      </header>

      <main className="flex flex-col gap-4 px-2">{children}</main>
    </div>
  )
}
