import { useGoals } from '../../hooks/useGoals'
import { TaskCard } from './components/task-card/@index'
import { WeeklyWrapperCard } from './components/wrapper-card'

export function CompletedTasksPage() {
  const { finishedGoals } = useGoals()

  return (
    <div className="flex flex-col gap-4 py-[20px]">
      <header>
        <h2>Você concluiu 8 tarefas ao decorrer dessa semana</h2>
      </header>
      <WeeklyWrapperCard>
        {finishedGoals.map(({ id, name, category, priority, status }) => {
          return (
            <TaskCard.Root key={name}>
              <TaskCard.Header
                status={status}
                taskName={name}
                taskTag={category}
              />
              <TaskCard.Hours />
              <TaskCard.Priority priorityLevel={priority} />
              <TaskCard.Action status={status} taskId={id} />
            </TaskCard.Root>
          )
        })}
      </WeeklyWrapperCard>
    </div>
  )
}
