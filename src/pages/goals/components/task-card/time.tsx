interface TaskHoursProps {
  startHour?: number
  endHour?: number
}

export function TaskTime({ startHour, endHour }: TaskHoursProps) {
  function addZeroBeforeNumber(number: number) {
    if (number <= 9) {
      const fixedNumber = `0${number}`
      return fixedNumber
    }
    return number
  }
  return (
    <div className="flex gap-1 text-white font-monts font-medium text-lg">
      {Number.isNaN(startHour) || Number.isNaN(endHour) ? (
        <>
          <span>{''}</span>
        </>
      ) : (
        <>
          <span>{addZeroBeforeNumber(startHour!)}h</span>
          <span>-</span>
          <span>{addZeroBeforeNumber(endHour!)}h</span>
        </>
      )}
    </div>
  )
}
