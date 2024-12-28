import { useContext } from 'react'
import { DateContext } from '../contexts/date-context'

export function useDate() {
  return useContext(DateContext)
}
