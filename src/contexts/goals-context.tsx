import { type ReactNode, createContext, useReducer } from 'react'

import { v4 as uuidv4 } from 'uuid'
import type { TaskStatusValues } from '../pages/goals/components/task-card/action'
import {
  addNewGoalAction,
  editOrderAction,
  removeGoalAction,
  setGoalAsFinishedAction,
} from '../reducers/goals/actions'
import { type GoalsProps, goalsReducer } from '../reducers/goals/reducers'

/* TODO 
  ! Os horários não aparecem na tela de tasks concluídas
*/
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
  editCurrentGoal: (taskId: string, data: GoalsProps) => void
  removeCurrentGoal: (goalToRemove: GoalsProps) => void
}

export const GoalsContext = createContext({} as GoalsContextProps)

export function GoalsProvider({ children }: GoalsProviderProps) {
  const [goalsState, dispatch] = useReducer(goalsReducer, {
    goals: [],
    finishedGoals: [],
  })

  const { goals, finishedGoals } = goalsState

  const totalGoals = goals.length
  const completedGoals = goals.filter((goal: GoalsProps) => {
    return goal.taskStatus === 'completed'
  })

  const highOrderGoals = goals.filter((goal: GoalsProps) => {
    return goal.taskPriority === 5
  })

  function setNewGoal({
    taskName,
    taskCategory,
    taskPriority,
    taskInitialHour,
    taskEndHour,
  }: GoalsProps) {
    const goalData = {
      id: uuidv4(),
      taskName,
      taskCategory,
      taskPriority,
      taskInitialHour,
      taskEndHour,
      taskStatus: 'pending' as TaskStatusValues,
      taskCreationDate: new Date(),
    }

    dispatch(addNewGoalAction(goalData))
  }

  function setGoalAsFinished(id: string) {
    const goalToComplete = goals.find((goal: GoalsProps) => goal.id === id)

    if (!goalToComplete) return

    const goalsWithoutCurrentCompletedGoal = goals.filter(
      (goal: GoalsProps) => goal.id !== goalToComplete?.id
    )

    const finishedTask = {
      ...goalToComplete,
      taskCompletedDate: new Date(),
      taskStatus: 'completed',
    }

    if (goalToComplete) {
      dispatch(
        setGoalAsFinishedAction(finishedTask, goalsWithoutCurrentCompletedGoal)
      )
    }
  }

  function editCurrentGoal(taskId: string, data: GoalsProps) {
    try {
      const goalsAfterUpdate = goals.map((goal: GoalsProps) =>
        goal.id === taskId
          ? {
              ...goal,
              ...data,
            }
          : goal
      )
      dispatch(editOrderAction(goalsAfterUpdate))
    } catch (error) {
      console.error(error)
    }
  }

  function removeCurrentGoal(goalToRemove: GoalsProps) {
    const goalsWithoutCurrentGoal = goals.filter(
      (goal: GoalsProps) => goal.id !== goalToRemove.id
    )

    dispatch(removeGoalAction(goalsWithoutCurrentGoal))
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
