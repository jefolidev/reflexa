import { MoodChart } from '../components/chart'
import { CreateTaskCard } from './components/create-task'
import { SimpleTaskCard } from './components/tasks'

export function TaskSection() {
  return (
    <section className="flex flex-col gap-4">
      <header>
        <h2 className="font-monts">Objetivos que impactam</h2>
      </header>
      <main className="flex h-72 gap-6">
        <SimpleTaskCard priorityLevel={4} />
        <CreateTaskCard />
        <MoodChart type="tasks" analytics="+25%" result={12} />
      </main>
    </section>
  )
}
