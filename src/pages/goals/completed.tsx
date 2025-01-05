import { useGoals } from '../../hooks/useGoals'

import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { useEffect, useState } from 'react'
import type { GoalsProps } from '../../reducers/goals/reducers'
import { capitalizeMonth } from '../../utils/capitalize-fn'
import { TaskCard } from './components/task-card/@index'
import { WeeklyWrapperCard } from './components/wrapper-card'

export function CompletedTasksPage() {
  const [goalsPerDay, setGoalsPerDay] = useState<{
    [key: string]: GoalsProps[]
  }>({})

  const { finishedGoals, totalFinishedGoals } = useGoals()

  useEffect(() => {
    const finishedGoalsPerDay = finishedGoals.reduce(
      (goalsGroupPerDay, goal) => {
        const date = `${goal.taskCompletedDate}`
        if (date) {
          goalsGroupPerDay[date] = goalsGroupPerDay[date] ?? []
          goalsGroupPerDay[date].push(goal)
        }
        return goalsGroupPerDay
      },
      {} as { [key: string]: GoalsProps[] }
    )

    setGoalsPerDay(finishedGoalsPerDay)
  }, [finishedGoals])

  const finishedGoalsPerDay = Object.entries(goalsPerDay)
  return (
    <div className="flex flex-col gap-4 py-[20px]  ">
      <header>
        <h2>
          Você concluiu {totalFinishedGoals} tarefas ao decorrer dessa semana
        </h2>
      </header>
      {finishedGoalsPerDay.map(([date, goals]) => (
        <WeeklyWrapperCard
          key={date}
          goalsDate={capitalizeMonth(
            dayjs(date),
            goals[0].taskCreationDate.getFullYear()
          )}
        >
          {Array.isArray(goals) &&
            goals.map(
              ({ taskName, taskCategory, taskPriority, taskStatus, id }) => {
                return (
                  <TaskCard.Root key={id}>
                    <TaskCard.Header
                      status={taskStatus}
                      taskName={taskName}
                      taskTag={taskCategory}
                    />
                    <TaskCard.Priority priorityLevel={taskPriority} />
                    <TaskCard.Action status={taskStatus} taskId={id} />
                  </TaskCard.Root>
                )
              }
            )}
        </WeeklyWrapperCard>
      ))}
    </div>
  )
}
