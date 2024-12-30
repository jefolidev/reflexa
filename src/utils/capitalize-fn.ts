import dayjs, { type Dayjs } from 'dayjs'

export function capitalizeMonth(date: Dayjs, year?: number) {
  const goalDate = dayjs(date)

  const goalDay = goalDate.date()

  const currentMonth = goalDate.locale('pt-br').format('MMM')
  const formatedTodayMonth =
    currentMonth[0].toUpperCase() + currentMonth.slice(1)

  if (year) {
    return `${goalDay} ${formatedTodayMonth} ${year}`
  }

  return `${goalDay} ${formatedTodayMonth}`
}
