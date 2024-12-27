import type { GoalsProps } from './reducers'

export enum ActionTypes {
  ADD_NEW_GOAL = 'ADD_NEW_GOAL',
  SET_GOALS_AS_COMPLETE = 'SET_GOALS_AS_COMPLETE',
  EDIT_GOAL = 'EDIT_GOAL',
  REMOVE_GOAL = 'REMOVE_GOAL',
}

export function addNewGoalAction(goalData: GoalsProps) {
  return {
    type: ActionTypes.ADD_NEW_GOAL,
    payload: { goalData },
  }
}

export function setGoalAsFinishedAction(
  finishedTask: GoalsProps,
  goalsWithoutCurrentCompletedGoal: GoalsProps
) {
  return {
    type: ActionTypes.SET_GOALS_AS_COMPLETE,
    payload: { finishedTask, goalsWithoutCurrentCompletedGoal },
  }
}

export function editOrderAction(goalsAfterUpdate: GoalsProps) {
  return { type: ActionTypes.EDIT_GOAL, payload: { goalsAfterUpdate } }
}

export function removeGoalAction(goalsWithoutCurrentGoal: GoalsProps) {
  return {
    type: ActionTypes.REMOVE_GOAL,
    payload: { goalsWithoutCurrentGoal },
  }
}
