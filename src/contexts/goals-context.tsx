import { type ReactNode, createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'

const goalSchema = z.object({
  id: z.string(),
  taskName: z.string().min(1),
  taskCategory: z.string().min(1),
  taskInitialHour: z.string().optional(),
  taskEndHour: z.string().optional(),
  taskPriority: z.number().min(1).max(2),
  taskStatus: z.enum(['pending', 'completed', 'unfinished']),
  taskCreationDate: z.date(),
  taskCompletedDate: z.date().optional(),
  taskExpirationDate: z.date().optional(),
})

export type GoalsProps = z.infer<typeof goalSchema>

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
  editCurrentGoal: (editedGoal: GoalsProps[]) => void
  removeCurrentGoal: (goalToRemove: GoalsProps) => void
}

export const GoalsContext = createContext({} as GoalsContextProps)

export function GoalsProvider({ children }: GoalsProviderProps) {
  const [goals, setGoals] = useState<GoalsProps[]>([
    {
      id: uuidv4(),
      taskName: 'Estudar Unidade I direito digital',
      taskCategory: 'Faculdade',
      taskInitialHour: '10',
      taskEndHour: '12',
      taskPriority: 1,
      taskStatus: 'pending',
      taskCreationDate: new Date(),
    },
  ])

  const [finishedGoals, setFinishedGoals] = useState<GoalsProps[]>([
    {
      id: uuidv4(),
      taskName: 'Estudar Unidade IV de Banco de Dados',
      taskCategory: 'Faculdade',
      taskInitialHour: '10',
      taskEndHour: '12',
      taskPriority: 1,
      taskStatus: 'completed',
      taskCreationDate: new Date(),
      taskCompletedDate: new Date(),
    },
  ])

  const totalGoals = goals.length
  const completedGoals = goals.filter((goal) => {
    return goal.taskStatus === 'completed'
  })

  const highOrderGoals = goals.filter((goal) => {
    return goal.taskPriority === 5
  })

  function setNewGoal({
    taskName,
    taskCategory,
    taskPriority,
    taskInitialHour,
    taskEndHour,
  }: GoalsProps) {
    setGoals([
      ...goals,
      {
        id: uuidv4(),
        taskName,
        taskCategory,
        taskPriority,
        taskInitialHour,
        taskEndHour,
        taskStatus: 'pending',
        taskCreationDate: new Date(),
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
          taskCompletedDate: new Date(),
          taskStatus: 'completed',
        },
      ])

      setGoals(goalsWithoutCurrentCompletedGoal)
    }
  }

  function editCurrentGoal(updatedGoal: GoalsProps[]) {
    setGoals(updatedGoal)
  }

  function removeCurrentGoal(goalToRemove: GoalsProps) {
    const goalsWithoutCurrentGoal = goals.filter(
      (goal) => goal.id !== goalToRemove.id
    )

    setGoals(goalsWithoutCurrentGoal)
  }

  return (
    <GoalsContext.Provider
      value={{
        goals,
        setNewGoal,
        editCurrentGoal,
        removeCurrentGoal,
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
