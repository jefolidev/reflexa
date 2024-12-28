import dayjs from 'dayjs'
import { useGoals } from '../../hooks/useGoals'

import 'dayjs/locale/pt-br'
import { useEffect, useState } from 'react'
import type { GoalsProps } from '../../reducers/goals/reducers'
import { TaskCard } from './components/task-card/@index'
import { WeeklyWrapperCard } from './components/wrapper-card'

export function CompletedTasksPage() {
  const [goalsPerDay, setGoalsPerDay] = useState<{
    [key: string]: GoalsProps[]
  }>({})

  const { finishedGoals } = useGoals()

  const totalFinishedGoals = finishedGoals.length

  function capitalizeMonth(date: string) {
    const goalDate = dayjs(date)

    const goalDay = goalDate.date()
    const goalYear = goalDate.year()

    const currentMonth = goalDate.locale('pt-br').format('MMM')
    const formatedTodayMonth =
      currentMonth[0].toUpperCase() + currentMonth.slice(1)

    return `${goalDay} ${formatedTodayMonth}, ${goalYear}`
  }

  useEffect(() => {
    const goalsPerDay = finishedGoals.reduce(
      (goalDateArray, goal) => {
        const date = goal.taskCompletedDate?.toDateString()
        if (date) {
          goalDateArray[date] = goalDateArray[date] ?? []
          goalDateArray[date].push(goal)

          console.log(goalDateArray, goal)
        }
        return goalDateArray
      },
      {} as { [key: string]: GoalsProps[] }
    )

    setGoalsPerDay(goalsPerDay)
  }, [finishedGoals])

  return (
    <div className="flex flex-col gap-4 py-[20px]  ">
      <header>
        <h2>
          Você concluiu {totalFinishedGoals} tarefas ao decorrer dessa semana
        </h2>
      </header>
      {Object.entries(goalsPerDay).map(([date, goals]) => (
        <WeeklyWrapperCard key={date} goalsDate={capitalizeMonth(date)}>
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
