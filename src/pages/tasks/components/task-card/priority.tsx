interface TaskPriorityProps {
  priorityLevel: number
}

export function TaskPriority({ priorityLevel }: TaskPriorityProps) {
  return (
    <div className="flex bg-green-500/60 rounded-full w-16 h-7 justify-center items-center p-1">
      <span className="text-green-300 font-monts font-medium text-lg">
        {priorityLevel}
      </span>
    </div>
  )
}
