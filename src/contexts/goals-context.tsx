import { type ReactNode, createContext, useState } from 'react'
import type { TaskStatusValues } from '../pages/goals/components/task-card/action'
import type { PriorityValues } from '../pages/goals/components/task-card/priority'

interface GoalsProps {
  id: number
  name: string
  category: string
  startHour?: string
  endHour?: string
  priority: PriorityValues
  status: TaskStatusValues
}

interface GoalsProviderProps {
  children: ReactNode
}

interface GoalsContextProps {
  goals: GoalsProps[]
  setNewGoal: (goals: GoalsProps) => void
}

export const GoalsContext = createContext({} as GoalsContextProps)

export function GoalsProvider({ children }: GoalsProviderProps) {
  const goalId = new Date().getTime()

  const [goals, setGoals] = useState<GoalsProps[]>([
    {
      id: goalId,
      name: 'Estudar Unidade I direito digital',
      category: 'Faculdade',
      startHour: '10',
      endHour: '12',
      priority: 1,
      status: 'pending',
    },
  ])

  function setNewGoal({
    name,
    category,
    priority,
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
        startHour,
        endHour,
        status: 'pending',
      },
    ])

    console.log(goals)
  }

  return (
    <GoalsContext.Provider value={{ goals, setNewGoal }}>
      {children}
    </GoalsContext.Provider>
  )
}