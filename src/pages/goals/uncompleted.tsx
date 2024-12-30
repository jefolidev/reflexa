import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useGoals } from '../../hooks/useGoals'
import type { GoalsProps } from '../../reducers/goals/reducers'
import { capitalizeMonth } from '../../utils/capitalize-fn'
import { TaskCard } from './components/task-card/@index'
import { WeeklyWrapperCard } from './components/wrapper-card'

export function UncompletedTasksPage() {
  const [goalsPerDay, setGoalsPerDay] = useState<{
    [key: string]: GoalsProps[]
  }>({})

  const { expiredGoals, totalExpiredGoals } = useGoals()

  useEffect(() => {
    const expiredGoalsPerDay = expiredGoals.reduce(
      (goalsGroupPerDay, goals) => {
        const date = `${goals.taskExpirationDate}`
        if (date) {
          goalsGroupPerDay[date] = goalsGroupPerDay[date] ?? []
          goalsGroupPerDay[date].push(goals)
        }
        return goalsGroupPerDay
      },
      {} as { [key: string]: GoalsProps[] }
    )
    setGoalsPerDay(expiredGoalsPerDay)
  }, [expiredGoals])

  const expiredGoalsPerDay = Object.entries(goalsPerDay)

  return (
    <div className="flex flex-col gap-4 py-6">
      <header>
        <h2>
          Você deixou {totalExpiredGoals} tarefas pendentes ao decorrer dessa
          semana
        </h2>
      </header>

      {expiredGoalsPerDay.map(([date, goals]) => (
        <WeeklyWrapperCard
          key={date}
          goalsDate={capitalizeMonth(
            dayjs(date),
            goals[0].taskCreationDate.getFullYear()
          )}
        >
          {goals.map(
            ({ taskName, taskCategory, taskPriority, taskStatus, id }) => (
              <TaskCard.Root key={id}>
                <TaskCard.Header taskName={taskName} taskTag={taskCategory} />
                <TaskCard.Priority priorityLevel={taskPriority} />
                <TaskCard.Action status={taskStatus} taskId={id} />
              </TaskCard.Root>
            )
          )}
        </WeeklyWrapperCard>
      ))}
    </div>
  )
}
