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
  pickTheStartAndEndOfWeek: (date: Date) => Date[]
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

  function pickTheStartAndEndOfWeek(date: Date) {
    const dateInDayJs = dayjs(date)

    const startOfWeek = dateInDayJs.startOf('week').toDate()
    const endOfWeek = dateInDayJs.endOf('week').toDate()

    return [startOfWeek, endOfWeek]
  }

  return (
    <DateContext.Provider
      value={{
        currentDate,
        tomorrow,
        yesterday,
        todayDate,
        todayMonth,
        todayYear,
        pickTheStartAndEndOfWeek,
      }}
    >
      {children}
    </DateContext.Provider>
  )
}
