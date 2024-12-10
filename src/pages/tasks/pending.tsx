import { TaskCard } from './components/task-card/@index'
import { TaskPriority } from './components/task-card/priority'

export function PendingTasksPage() {
  return (
    <div>
      <header className="my-8">
        <h2>
          Você tem 8 tasks de nível <strong>5</strong> para completar.
        </h2>
        <div className="flex justify-between my-1.5">
          <span className="font-monts font-sm  text-white">
            <p className="font-bold inline-block ">2</p> de{' '}
            <p className="font-bold inline-block ">4</p> tarefas concluídas
          </span>
          <span className="font-monts font-sm text-white ">50%</span>
        </div>
      </header>
      <main className="flex flex-col gap-4">
        <TaskCard.Root>
          <TaskCard.Header taskName="Organizar a casa" taskTag="Pessoal" />
          <TaskCard.Hours />
          <TaskPriority priorityLevel={5} />
          <TaskCard.Action />
        </TaskCard.Root>
      </main>
    </div>
  )
}
