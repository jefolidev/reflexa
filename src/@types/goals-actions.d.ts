import type { ActionTypes } from '../reducers/goals/actions'
import type { GoalsProps } from './reducers'

export type ActionTypesProps =
  | {
      type: ActionTypes.ADD_NEW_GOAL
      payload: {
        goalData: GoalsProps
      }
    }
  | {
      type: ActionTypes.SET_GOALS_AS_COMPLETE
      payload: {
        finishedTask: GoalsProps
        goalsWithoutCurrentCompletedGoal: GoalsProps[]
      }
    }
  | {
      type: ActionTypes.EDIT_GOAL
      payload: {
        goalsAfterUpdate: GoalsProps[]
      }
    }
  | {
      type: ActionTypes.REMOVE_GOAL
      payload: { goalsWithoutCurrentGoal: GoalsProps[] }
    }
  | {
      type: ActionTypes.SET_GOAL_AS_EXPIRED
      payload: { expiredTask: GoalsProps }
    }
