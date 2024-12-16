interface TaskHoursProps {
  startHour?: number
  endHour?: number
}

export function TaskTime({ startHour, endHour }: TaskHoursProps) {
  return (
    <div className="flex gap-1 text-white font-monts font-medium text-lg">
      {startHour !== null && endHour !== null ? (
        <>
          <span>{startHour}h</span>
          <span>-</span>
          <span>{endHour}h</span>
        </>
      ) : (
        <span>{''}</span>
      )}
    </div>
  )
}
