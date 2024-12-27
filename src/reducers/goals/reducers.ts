import { z } from 'zod'

const goalSchema = z.object({
  id: z.string(),
  taskName: z.string().min(1, 'Insira algum nome para a tarefa.'),
  taskCategory: z.string().min(1, 'Adicione alguma categoria para sua tarefa.'),
  taskInitialHour: z.number().min(0).max(23).optional(),
  taskEndHour: z.number().min(0).max(23).optional(),
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
}

export function goalsReducer(state: GoalsState, action: any) {
  switch (action.type) {
    case 'ADD_NEW_GOAL':
      return {
        ...state,
        goals: [...state.goals, action.payload.goalData],
      }

    case 'SET_GOALS_AS_COMPLETE':
      return {
        ...state,
        goals: action.payload.goalsWithoutCurrentCompletedGoal,
        finishedGoals: [...state.finishedGoals, action.payload.finishedTask],
      }

    case 'EDIT_GOAL':
      return {
        ...state,
        goals: action.payload.goalsAfterUpdate,
      }

    case 'REMOVE_GOAL':
      return {
        ...state,
        goals: action.payload.goalsWithoutCurrentGoal,
      }

    default:
      return state
  }
}
