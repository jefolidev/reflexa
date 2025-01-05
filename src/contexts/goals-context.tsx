import { type ReactNode, createContext, useReducer } from 'react'

import { v4 as uuidv4 } from 'uuid'
import { useDate } from '../hooks/useDate'
import type { TaskStatusValues } from '../pages/goals/components/task-card/action'
import {
  addNewGoalAction,
  editOrderAction,
  setGoalAsExpiredAction,
  setGoalAsFinishedAction,
} from '../reducers/goals/actions'
import { type GoalsProps, goalsReducer } from '../reducers/goals/reducers'

/* 

  TODO - 
    ! 1. Fazer com que tarefas criadas e sua data não corresponder
    ! ao dia de hoje, ela vá automaticamente para o "Não Concluídas."

    ! 2. Os horários não aparecem na tela de tasks concluídas

*/
interface GoalsProviderProps {
  children: ReactNode
}
interface GoalsContextProps {
  goals: GoalsProps[]
  finishedGoals: GoalsProps[]
  expiredGoals: GoalsProps[]
  totalGoals: number
  totalFinishedGoals: number
  totalExpiredGoals: number
  finishedAndExpiredGoals: GoalsProps[]
  highOrderGoals: GoalsProps[]
  setNewGoal: (goals: GoalsProps) => void
  findGoalById: (goalId: string) => GoalsProps | undefined
  setGoalAsExpired: () => void
  setGoalAsFinished: (goalId: string) => void
  editCurrentGoal: (goalToUse: GoalsProps, data: GoalsProps) => void
  removeCurrentGoal: (goalToRemove: GoalsProps) => void
}

export const GoalsContext = createContext({} as GoalsContextProps)

export function GoalsProvider({ children }: GoalsProviderProps) {
  const { currentDate, yesterday } = useDate()

  const [goalsState, dispatch] = useReducer(goalsReducer, {
    goals: [
      {
        id: uuidv4(),
        taskName: 'Comer cu',
        taskCategory: 'Pessoal',
        taskPriority: 5,
        taskStatus: 'pending',
        taskCreationDate: yesterday.toDate(),
      },
    ],
    finishedGoals: [
      {
        id: uuidv4(),
        taskName: 'Estudar NextJS',
        taskCategory: 'Pessoal',
        taskPriority: 5,
        taskStatus: 'completed',
        taskCreationDate: new Date('2024-12-10'),
        taskCompletedDate: currentDate.toDate(),
      },
      {
        id: uuidv4(),
        taskName: 'Estudar Node',
        taskCategory: 'Pessoal',
        taskPriority: 5,
        taskStatus: 'completed',
        taskCreationDate: yesterday.toDate(),
        taskCompletedDate: currentDate.toDate(),
      },
      {
        id: uuidv4(),
        taskName: 'Estudar JavaScript',
        taskCategory: 'Pessoal',
        taskPriority: 5,
        taskStatus: 'completed',
        taskCreationDate: yesterday.toDate(),
        taskCompletedDate: yesterday.toDate(),
      },
      {
        id: uuidv4(),
        taskName: 'Estudar React',
        taskCategory: 'Pessoal',
        taskPriority: 5,
        taskStatus: 'completed',
        taskCreationDate: currentDate.toDate(),
        taskCompletedDate: yesterday.toDate(),
      },
    ],
    expiredGoals: [
      {
        id: uuidv4(),
        taskName: 'Procrastinar',
        taskCategory: 'Pessoal',
        taskPriority: 1,
        taskStatus: 'unfinished',
        taskCreationDate: currentDate.toDate(),
        taskExpirationDate: yesterday.toDate(),
      },
      {
        id: uuidv4(),
        taskName: 'Jogar Lol',
        taskCategory: 'Pessoal',
        taskPriority: 1,
        taskStatus: 'unfinished',
        taskCreationDate: currentDate.toDate(),
        taskExpirationDate: yesterday.toDate(),
      },
      {
        id: uuidv4(),
        taskName: 'Jogar Valorant',
        taskCategory: 'Pessoal',
        taskPriority: 1,
        taskStatus: 'unfinished',
        taskCreationDate: currentDate.toDate(),
        taskExpirationDate: yesterday.toDate(),
      },
    ],
  })

  const { goals, finishedGoals, expiredGoals } = goalsState

  const totalGoals = goals.length
  const totalFinishedGoals = finishedGoals.length
  const totalExpiredGoals = expiredGoals.length

  const highOrderGoals = goals.filter((goal: GoalsProps) => {
    return goal.taskPriority === 5
  })

  const finishedAndExpiredGoals = [...finishedGoals, ...expiredGoals]

  function findGoalById(goalId: string): GoalsProps | undefined {
    return goals.find((goal) => goal.id === goalId)
  }

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
    if (id) {
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
          setGoalAsFinishedAction(
            finishedTask,
            goalsWithoutCurrentCompletedGoal
          )
        )
      }
    } else {
    }
  }

  function editCurrentGoal(goalToUse: GoalsProps, data: GoalsProps) {
    try {
      const goalsAfterUpdate = goals.map((goal: GoalsProps) =>
        goal.id === goalToUse.id
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

  function removeCurrentGoal(goalToUse: GoalsProps) {
    console.log('Antes de remover', goals)

    const goalId = findGoalById(goalToUse.id)
    const goalToDelete = goals.indexOf(goalToUse)

    console.log('Tarefa a remover ', goalToDelete)
    console.log('Tarefa a remover 2', goalId)

    // if (goalToDelete) {
    //   const goalsWithoutCurrentGoal = goals.filter(
    //     (goal: GoalsProps) => goal.id !== goalToDelete?.id
    //   )
    //   dispatch(removeGoalAction(goalsWithoutCurrentGoal))
    // }
  }

  function setGoalAsExpired() {
    goals.forEach((task: GoalsProps) => {
      if (task.taskCreationDate < currentDate.startOf('day').toDate()) {
        if (task.taskStatus === 'pending') {
          const expiratedTask: GoalsProps = {
            ...task,
            taskExpirationDate: currentDate.toDate(),
            taskStatus: 'unfinished',
          }
          dispatch(setGoalAsExpiredAction(expiratedTask))
        }
      }
    })
  }

  return (
    <GoalsContext.Provider
      value={{
        goals,
        finishedGoals,
        expiredGoals,
        totalGoals,
        totalFinishedGoals,
        totalExpiredGoals,
        finishedAndExpiredGoals,
        highOrderGoals,
        setNewGoal,
        findGoalById,
        editCurrentGoal,
        setGoalAsExpired,
        setGoalAsFinished,
        removeCurrentGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  )
}
export type { GoalsProps }
