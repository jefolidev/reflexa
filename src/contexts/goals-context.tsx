import { type ReactNode, createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { TaskStatusValues } from '../pages/goals/components/task-card/action'
import type { PriorityValues } from '../pages/goals/components/task-card/priority'

export interface GoalsProps {
  id: string
  name: string
  category: string
  startHour?: string
  endHour?: string
  priority: PriorityValues
  status: TaskStatusValues
  createdAt: Date
  completedAt?: Date | null
  expiredAt?: Date | null
}

interface GoalsProviderProps {
  children: ReactNode
}

interface GoalsContextProps {
  goals: GoalsProps[]
  finishedGoals: GoalsProps[]
  totalGoals: number
  completedGoals: GoalsProps[]
  highOrderGoals: GoalsProps[]
  setNewGoal: (goals: GoalsProps) => void
  setGoalAsFinished: (id: string) => void
}

export const GoalsContext = createContext({} as GoalsContextProps)

export function GoalsProvider({ children }: GoalsProviderProps) {
  const [goals, setGoals] = useState<GoalsProps[]>([
    {
      id: uuidv4(),
      name: 'Estudar Unidade I direito digital',
      category: 'Faculdade',
      startHour: '10',
      endHour: '12',
      priority: 1,
      status: 'pending',
      createdAt: new Date(),
    },
  ])

  const [finishedGoals, setFinishedGoals] = useState<GoalsProps[]>([
    {
      id: uuidv4(),
      name: 'Estudar Unidade IV de Banco de Dados',
      category: 'Faculdade',
      startHour: '10',
      endHour: '12',
      priority: 1,
      status: 'completed',
      createdAt: new Date(),
      completedAt: new Date(),
    },
  ])

  const totalGoals = goals.length
  const completedGoals = goals.filter((goal) => {
    return goal.status === 'completed'
  })

  const highOrderGoals = goals.filter((goal) => {
    return goal.priority === 5
  })

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
        id: uuidv4(),
        name,
        category,
        priority,
        startHour,
        endHour,
        status: 'pending',
        createdAt: new Date(),
      },
    ])
  }

  function setGoalAsFinished(id: string) {
    const goalToComplete = goals.find((goal) => goal.id === id)

    const goalsWithoutCurrentCompletedGoal = goals.filter((goal) => {
      if (goalToComplete) {
        return goal.id !== goalToComplete.id
      }
    })

    if (goalToComplete) {
      setFinishedGoals([
        ...finishedGoals,
        {
          ...goalToComplete,
          completedAt: new Date(),
          status: 'completed',
        },
      ])

      setGoals(goalsWithoutCurrentCompletedGoal)
    }
  }

  return (
    <GoalsContext.Provider
      value={{
        goals,
        setNewGoal,
        finishedGoals,
        setGoalAsFinished,
        totalGoals,
        completedGoals,
        highOrderGoals,
      }}
    >
      {children}
    </GoalsContext.Provider>
  )
}
