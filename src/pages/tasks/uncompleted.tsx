import { TaskCard } from './components/task-card/@index'
import { WeeklyWrapperCard } from './components/wrapper-card'

export function UncompletedTasksPage() {
  return (
    <div className="flex flex-col gap-4 py-6">
      <header>
        <h2>Você deixou 8 tarefas pendentes ao decorrer dessa semana</h2>
      </header>
      <WeeklyWrapperCard hasStatus completedTasks={5} uncompletedTasks={2}>
        <TaskCard.Root>
          <TaskCard.Header
            taskName="Levar o cachorro pro médico"
            taskTag="Pessoal"
          />
          <TaskCard.Hours />
          <TaskCard.Priority priorityLevel={5} />
          <TaskCard.Action status="unfinished" />
        </TaskCard.Root>
        <TaskCard.Root>
          <TaskCard.Header
            taskName="Levar o cachorro pro médico"
            taskTag="Pessoal"
          />
          <TaskCard.Hours />
          <TaskCard.Priority priorityLevel={5} />
          <TaskCard.Action status="unfinished" />
        </TaskCard.Root>
      </WeeklyWrapperCard>
    </div>
  )
}
