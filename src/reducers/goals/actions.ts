import type { ActionTypesProps } from '../../@types/goals-actions'
import type { GoalsProps } from './reducers'

export enum ActionTypes {
  ADD_NEW_GOAL = 'ADD_NEW_GOAL',
  SET_GOALS_AS_COMPLETE = 'SET_GOALS_AS_COMPLETE',
  EDIT_GOAL = 'EDIT_GOAL',
  REMOVE_GOAL = 'REMOVE_GOAL',
  SET_GOAL_AS_EXPIRED = 'SET_GOAL_AS_EXPIRED',
}

export function addNewGoalAction(goalData: GoalsProps): ActionTypesProps {
  return {
    type: ActionTypes.ADD_NEW_GOAL,
    payload: { goalData },
  }
}

export function setGoalAsFinishedAction(
  finishedTask: GoalsProps,
  goalsWithoutCurrentCompletedGoal: GoalsProps[]
): ActionTypesProps {
  return {
    type: ActionTypes.SET_GOALS_AS_COMPLETE,
    payload: { finishedTask, goalsWithoutCurrentCompletedGoal },
  }
}

export function editOrderAction(
  goalsAfterUpdate: GoalsProps[]
): ActionTypesProps {
  return { type: ActionTypes.EDIT_GOAL, payload: { goalsAfterUpdate } }
}

export function removeGoalAction(
  goalsWithoutCurrentGoal: GoalsProps[]
): ActionTypesProps {
  return {
    type: ActionTypes.REMOVE_GOAL,
    payload: { goalsWithoutCurrentGoal },
  }
}

export function setGoalAsExpiredAction(
  expiredTask: GoalsProps
): ActionTypesProps {
  return {
    type: ActionTypes.SET_GOAL_AS_EXPIRED,
    payload: { expiredTask },
  }
}
