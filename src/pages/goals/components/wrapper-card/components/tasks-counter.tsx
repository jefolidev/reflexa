interface TaskCounterProps {
	completedTasks?: number
	uncompletedTasks?: number
}

export function TaskCounter({
	completedTasks,
	uncompletedTasks,
}: TaskCounterProps) {
	return (
		<div className="flex gap-2 bg-stone-800 rounded-full items-center justify-center px-2">
			<div className="flex gap-3 items-center px-1">
				<span className="font-poppins  text-white ">{completedTasks}</span>
				<div className="bg-green-600 rounded-full p-1 h-1 w-1" />
			</div>
			<div className="flex gap-3 items-center px-1">
				<span className="font-poppins  text-white ">{uncompletedTasks}</span>
				<div className="bg-red-600 rounded-full p-1 h-1 w-1" />
			</div>
		</div>
	)
}
