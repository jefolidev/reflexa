import { useGoals } from '../../hooks/useGoals'
import { TaskCard } from './components/task-card/@index'
import { WeeklyWrapperCard } from './components/wrapper-card'

export function CompletedTasksPage() {
  const { finishedGoals } = useGoals()

  const totalFinishedGoals = finishedGoals.length

  return (
    <div className="flex flex-col gap-4 py-[20px]">
      <header>
        <h2>
          Você concluiu {totalFinishedGoals} tarefas ao decorrer dessa semana
        </h2>
      </header>
      <WeeklyWrapperCard>
        {finishedGoals.map(
          ({ id, taskName, taskCategory, taskPriority, taskStatus }) => {
            return (
              <TaskCard.Root key={taskName}>
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
    </div>
  )
}
