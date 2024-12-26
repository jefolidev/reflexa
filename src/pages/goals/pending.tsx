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
        </div>
      </header>
      <main className="flex flex-col gap-3">
        {goals.map(
          ({
            id,
            taskName,
            taskCategory,
            taskPriority,
            taskStatus,
            taskInitialHour,
            taskEndHour,
          }) => {
            return (
              <TaskCard.Root key={taskName}>
                <TaskCard.Header taskName={taskName} taskTag={taskCategory} />
                <TaskCard.Hours
                  startHour={taskInitialHour}
                  endHour={taskEndHour}
                />
                <TaskPriority priorityLevel={taskPriority} />
                <TaskCard.Action status={taskStatus} taskId={id} />
              </TaskCard.Root>
            )
          }
        )}
      </main>
    </div>
  )
}
