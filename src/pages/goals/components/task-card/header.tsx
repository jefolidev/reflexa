import type { TaskStatusValues } from './action'

interface TaskHeaderProps {
	taskName: string
	taskTag: string
	status?: TaskStatusValues
}

export function TaskHeader({
	taskName,
	taskTag,
	status = 'unfinished',
}: TaskHeaderProps) {
	const statusBarColor = status === 'completed' ? 'bg-green-800' : 'bg-red-500'

	return (
		<div className="flex gap-8 w-2/4">
			<div className={`h-10 w-0.5 rounded-full ${statusBarColor} flex`} />
			<div className="flex flex-col gap-.5">
				<h4>{taskName}</h4>
				<p className="text-gray-300 font-monts text-sm">{taskTag}</p>
			</div>
		</div>
	)
}
