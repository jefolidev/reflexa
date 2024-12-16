import { DashboardHeader } from './components/header.tsx'
import { MoodSection } from './mood/index.tsx'
import { TaskSection } from './tasks/index.tsx'

export function DashboardPage() {
  return (
    <div className=" bg-zinc-800 w-screen h-screen flex-col p-12 ">
      <header className="mb-4">
        <span className="text-stone-500 font-poppins text-sm">Dashboard</span>
      </header>
      <div className="flex flex-col gap-6">
        <DashboardHeader userName="Jeferson" currentDate="07, Dez 2024" />
        <main className="flex flex-col gap-8">
          <MoodSection />
          <TaskSection />
        </main>
      </div>
    </div>
  )
}
