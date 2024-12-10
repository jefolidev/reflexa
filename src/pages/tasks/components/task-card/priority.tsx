type PriorityValues = 1 | 2 | 3 | 4 | 5

interface TaskPriorityProps {
  priorityLevel: PriorityValues
}

export function TaskPriority({ priorityLevel }: TaskPriorityProps) {
  const priorityStyles: Record<PriorityValues, string> = {
    1: 'bg-red-800 text-red-400',
    2: 'bg-red-700 text-red-300',
    3: 'bg-yellow-600 text-yellow-300',
    4: 'bg-green-600 text-green-300',
    5: 'bg-green-800 text-green-400',
  }

  const styles = priorityStyles[priorityLevel]

  return (
    <div
      className={`flex ${styles} rounded-full w-16 h-7 justify-center items-center p-1`}
    >
      <span className="font-monts font-medium text-lg">{priorityLevel}</span>
    </div>
  )
}
