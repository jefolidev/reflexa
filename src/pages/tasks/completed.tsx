import { TaskCard } from './components/task-card/@index'
import { WeeklyWrapperCard } from './components/wrapper-card'

export function CompletedTasksPage() {
  return (
    <div className="flex flex-col gap-4 py-[20px]">
      <header>
        <h2>Você concluiu 8 tarefas ao decorrer dessa semana</h2>
      </header>
      <WeeklyWrapperCard >
        <TaskCard.Root>
          <TaskCard.Header
            taskName="Levar o cachorro pro médico"
            taskTag="Pessoal"
          />
          <TaskCard.Hours />
          <TaskCard.Priority priorityLevel={5} />
          <TaskCard.Action status="completed" />
        </TaskCard.Root>
        <TaskCard.Root>
          <TaskCard.Header
            taskName="Levar o cachorro pro médico"
            taskTag="Pessoal"
          />
          <TaskCard.Hours />
          <TaskCard.Priority priorityLevel={5} />
          <TaskCard.Action status="completed" />
        </TaskCard.Root>
      </WeeklyWrapperCard>
    </div>
  )
}
