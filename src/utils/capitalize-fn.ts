import dayjs from 'dayjs'

export function capitalizeMonth(date: string) {
  const goalDate = dayjs(date)

  const goalDay = goalDate.date()
  const goalYear = goalDate.year()

  const currentMonth = goalDate.locale('pt-br').format('MMM')
  const formatedTodayMonth =
    currentMonth[0].toUpperCase() + currentMonth.slice(1)

  return `${goalDay} ${formatedTodayMonth}, ${goalYear}`
}
