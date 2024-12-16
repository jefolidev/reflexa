import { type ReactNode, createContext, useState } from 'react'
import type { TaskStatusValues } from '../pages/goals/components/task-card/action'
import type { PriorityValues } from '../pages/goals/components/task-card/priority'

interface GoalsProps {
  id: number
  name: string
  category: string
  startHour?: number
  endHour?: number
  priority: PriorityValues
  status: TaskStatusValues
}

interface GoalsProviderProps {
  children: ReactNode
}

interface GoalsContextProps {
  goals: GoalsProps[]
  createNewGoal: (goals: GoalsProps) => void
}

export const GoalsContext = createContext({} as GoalsContextProps)

export function GoalsProvider({ children }: GoalsProviderProps) {
  const goalId = new Date().getTime()

  const [goals, setGoals] = useState<GoalsProps[]>([
    {
      id: goalId,
      name: 'Estudar Unidade I direito digital',
      category: 'Faculdade',
      startHour: 10,
      endHour: 12,
      priority: 1,
      status: 'pending',
    },
  ])

  function createNewGoal({
    name,
    category,
    priority,
    status,
    startHour,
    endHour,
  }: GoalsProps) {
    setGoals([
      ...goals,
      {
        id: goalId,
        name,
        category,
        priority,
        status,
        startHour,
        endHour,
      },
    ])
  }

  return (
    <GoalsContext.Provider value={{ goals, createNewGoal }}>
      {children}
    </GoalsContext.Provider>
  )
}
