import { z } from 'zod'
import type { ActionTypesProps } from '../../@types/goals-actions'
import { ActionTypes } from './actions'

const goalSchema = z.object({
  id: z.string(),
  taskName: z.string().min(1, 'Insira algum nome para a tarefa.'),
  taskCategory: z.string().min(1, 'Adicione alguma categoria para sua tarefa.'),
  taskInitialHour: z.number().min(0).max(2).optional(),
  taskEndHour: z.number().min(0).max(2).optional(),
  taskPriority: z.number().min(1).max(5),
  taskStatus: z.enum(['pending', 'completed', 'unfinished']),
  taskCreationDate: z.date(),
  taskCompletedDate: z.date().optional(),
  taskExpirationDate: z.date().optional(),
})

export type GoalsProps = z.infer<typeof goalSchema>

interface GoalsState {
  goals: GoalsProps[]
  finishedGoals: GoalsProps[]
  expiredGoals: GoalsProps[]
}

export function goalsReducer(state: GoalsState, action: ActionTypesProps) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_GOAL:
      return {
        ...state,
        goals: [...state.goals, action.payload.goalData],
      }

    case ActionTypes.SET_GOALS_AS_COMPLETE:
      return {
        ...state,
        goals: action.payload.goalsWithoutCurrentCompletedGoal,
        finishedGoals: [...state.finishedGoals, action.payload.finishedTask],
      }

    case ActionTypes.EDIT_GOAL:
      return {
        ...state,
        goals: action.payload.goalsAfterUpdate,
      }

    case ActionTypes.REMOVE_GOAL:
      return {
        ...state,
        goals: action.payload.goalsWithoutCurrentGoal,
      }

    case ActionTypes.SET_GOAL_AS_EXPIRED:
      return {
        ...state,
        expiredGoals: [...state.expiredGoals, action.payload.expiredTask],
      }

    default:
      return state
  }
}
