import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(isBetween)

import type { GoalsProps } from '../../contexts/goals-context'
import { useDate } from '../../hooks/useDate'
import { useGoals } from '../../hooks/useGoals'
import { capitalizeMonth } from '../../utils/capitalize-fn'
import { TaskCard } from './components/task-card/@index'
import { WeeklyWrapperCard } from './components/wrapper-card'

type WeeklyGoals = { [weekKey: string]: GoalsProps[] }

export function OtherWeeksTasksPage() {
  const { pickTheStartAndEndOfWeek } = useDate()
  const { finishedAndExpiredGoals } = useGoals()

  const goalsPerWeek = finishedAndExpiredGoals.reduce((goalWeekArray, goal) => {
    const goalDate = dayjs(goal.taskCreationDate)

    const [firstWeekDay, lastWeekDay] = pickTheStartAndEndOfWeek(
      goalDate.toDate()
    )

    if (goalDate.isBetween(firstWeekDay, lastWeekDay, null, '[)')) {
      const weekKey = `${capitalizeMonth(dayjs(firstWeekDay))} - ${capitalizeMonth(dayjs(lastWeekDay))}`

      if (!goalWeekArray[weekKey]) {
        goalWeekArray[weekKey] = []
      }
      goalWeekArray[weekKey].push(goal)
    }
    return goalWeekArray
  }, {} as WeeklyGoals)

  const weeklyGoals = Object.entries(goalsPerWeek)

  return (
    <div className="flex flex-col gap-4 py-[19px]">
      <header>
        <h2>Você concluiu 28 tarefas ao decorrer desse mês</h2>
      </header>
      {weeklyGoals.map((goals) => (
        <WeeklyWrapperCard
          key={goals[0]}
          hasStatus
          completedTasks={8}
          uncompletedTasks={2}
          goalsDate={goals[0]}
        >
          {goals[1].map((goal) => {
            return (
              <TaskCard.Root key={goal.id}>
                <TaskCard.Header
                  status="completed"
                  taskName={goal.taskName}
                  taskTag={goal.taskCategory}
                />
                <TaskCard.Hours hours={goal} />
                <TaskCard.Priority priorityLevel={goal.taskPriority} />
                <TaskCard.Action status={goal.taskStatus} taskId={goal.id} />
              </TaskCard.Root>
            )
          })}
        </WeeklyWrapperCard>
      ))}
    </div>
  )
}
