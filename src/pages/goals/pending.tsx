import dayjs from 'dayjs'
import { NoTasks } from '../../components/no-tasks'
import { useDate } from '../../hooks/useDate'
import { useGoals } from '../../hooks/useGoals'
import { TaskCard } from './components/task-card/@index'
import { TaskPriority } from './components/task-card/priority'

export function PendingTasksPage() {
  const { goals, highOrderGoals, finishedGoals, totalGoals } = useGoals()
  const { currentDate } = useDate()

  const todayCompletedGoalsQuantity = finishedGoals.filter((goal) => {
    return dayjs(goal.taskCompletedDate).isSame(currentDate, 'day')
  })

  const totalGoalOfToday = totalGoals + todayCompletedGoalsQuantity.length
  console.log(goals)

  return (
    <div>
      <header className="my-6">
        <h2>
          Você tem {highOrderGoals.length} tasks de nível <strong>5</strong>{' '}
          para completar.
        </h2>
        <div className="flex justify-between my-1.5">
          <span className="font-monts font-sm  text-white">
            <p className="font-bold inline-block ">
              {todayCompletedGoalsQuantity.length}
            </p>{' '}
            de <p className="font-bold inline-block ">{totalGoalOfToday}</p>{' '}
            tarefas concluídas
          </span>
        </div>
      </header>
      {totalGoals === 0 ? (
        <NoTasks />
      ) : (
        <main className="flex flex-col gap-3">
          {goals.map((goal) => {
            return (
              <TaskCard.Root key={goal.taskName} goalId={goal.id}>
                <TaskCard.Header
                  taskName={goal.taskName}
                  taskTag={goal.taskCategory}
                />
                <TaskCard.Hours hours={goal} />
                <TaskPriority priorityLevel={goal.taskPriority} />
                <TaskCard.Action status={goal.taskStatus} taskId={goal.id} />
              </TaskCard.Root>
            )
          })}
        </main>
      )}
    </div>
  )
}
