interface TaskHeaderProps {
  taskName: string
  taskTag: string
}

export function TaskHeader({ taskName, taskTag }: TaskHeaderProps) {
  return (
    <div className="flex gap-8 w-2/4">
      <div className="h-10 w-0.5 rounded-full bg-red-500 flex" />
      <div className="flex flex-col gap-.5">
        <h4>{taskName}</h4>
        <p className="text-gray-300 font-monts text-sm">{taskTag}</p>
      </div>
    </div>
  )
}
