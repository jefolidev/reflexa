import { useContext } from 'react'
import { GoalsContext } from '../contexts/goals-context'

export function useGoals() {
	return useContext(GoalsContext)
}
