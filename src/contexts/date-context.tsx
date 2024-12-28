import dayjs, { type Dayjs } from 'dayjs'
import { type ReactNode, createContext } from 'react'

import 'dayjs/locale/pt-br'

interface DateContextProps {
  currentDate: Dayjs
  tomorrow: Dayjs
  yesterday: Dayjs
  todayDate: number
  todayMonth: number
  todayYear: number
}

interface DateProviderProps {
  children: ReactNode
}

export const DateContext = createContext({} as DateContextProps)

export function DateProvider({ children }: DateProviderProps) {
  const currentDate = dayjs(new Date()).locale('pt-br')

  const tomorrow = currentDate.add(1, 'day')
  const yesterday = currentDate.subtract(1, 'day')

  const todayDate = currentDate.date()
  const todayMonth = currentDate.month()
  const todayYear = currentDate.year()

  return (
    <DateContext.Provider
      value={{
        currentDate,
        tomorrow,
        yesterday,
        todayDate,
        todayMonth,
        todayYear,
      }}
    >
      {children}
    </DateContext.Provider>
  )
}
