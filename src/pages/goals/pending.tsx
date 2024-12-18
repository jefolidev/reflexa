import { useGoals } from '../../hooks/useGoals'
import { TaskCard } from './components/task-card/@index'
import { TaskPriority } from './components/task-card/priority'

export function PendingTasksPage() {
  const { goals, totalGoals, highOrderGoals, completedGoals } = useGoals()

  return (
    <div>
      <header className="my-6">
        <h2>
          Você tem {highOrderGoals.length} tasks de nível <strong>5</strong>{' '}
          para completar.
        </h2>
        <div className="flex justify-between my-1.5">
          <span className="font-monts font-sm  text-white">
            <p className="font-bold inline-block ">{completedGoals.length}</p>{' '}
            de <p className="font-bold inline-block ">{totalGoals}</p> tarefas
            concluídas
          </span>
          <span className="font-monts font-sm text-white ">50%</span>
        </div>
      </header>
      <main className="flex flex-col gap-3">
        {goals.map(
          ({ id, name, category, priority, status, startHour, endHour }) => {
            return (
              <TaskCard.Root key={name}>
                <TaskCard.Header taskName={name} taskTag={category} />
                <TaskCard.Hours startHour={startHour} endHour={endHour} />
                <TaskPriority priorityLevel={priority} />
                <TaskCard.Action status={status} taskId={id} />
              </TaskCard.Root>
            )
          }
        )}
      </main>
    </div>
  )
}
