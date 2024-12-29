import type { GoalsProps } from '../../../../reducers/goals/reducers'

interface TaskHoursProps {
  hours: GoalsProps
}

export function TaskTime({ hours }: TaskHoursProps) {
  function addZeroBeforeNumber() {
    if (hours.taskInitialHour! || hours.taskEndHour!) {
      const initialHour =
        hours.taskInitialHour! < 10 &&
        !String(hours.taskInitialHour).startsWith('0')
          ? `0${hours.taskInitialHour}`
          : hours.taskInitialHour
      const endHour =
        hours.taskEndHour! < 10 && !String(hours.taskEndHour).startsWith('0')
          ? `0${hours.taskEndHour}`
          : hours.taskEndHour

      return `${initialHour}h - ${endHour}h`
    }
  }

  return (
    <div className="flex gap-1 text-white font-monts font-medium text-lg">
      {<span>{addZeroBeforeNumber()}</span>}
    </div>
  )
}
