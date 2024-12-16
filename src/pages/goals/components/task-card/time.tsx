interface TaskHoursProps {
  startHour?: string
  endHour?: string
}

export function TaskTime({ startHour, endHour }: TaskHoursProps) {
  return (
    <div className="flex gap-1 text-white font-monts font-medium text-lg">
      {startHour !== undefined && endHour !== undefined ? (
        <>
          <span>{startHour}h</span>
          <span>-</span>
          <span>{endHour}h</span>
        </>
      ) : (
        <>
          <span>{''}</span>
        </>
      )}
    </div>
  )
}
