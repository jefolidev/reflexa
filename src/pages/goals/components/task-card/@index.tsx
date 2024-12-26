import { TaskAction } from './action'
import { TaskHeader } from './header'
import { TaskPriority } from './priority'
import { TaskRoot } from './root'
import { TaskTime } from './time'

export const TaskCard = {
	Root: TaskRoot,
	Header: TaskHeader,
	Hours: TaskTime,
	Priority: TaskPriority,
	Action: TaskAction,
}
