import { DefaultTag } from './components/default'
import { FinishedTag } from './components/finished'
import { UnfinishedTag } from './components/unfinished'

export type TaskStatusValues = 'pending' | 'completed' | 'unfinished'

interface TaskActionProps {
  status: TaskStatusValues
  taskId: string
}

export function TaskAction({ status = 'pending', taskId }: TaskActionProps) {
  function getStatusComponent(status: TaskStatusValues) {
    switch (status) {
      case 'unfinished':
        return <UnfinishedTag />
      case 'completed':
        return <FinishedTag />
      default:
        return <DefaultTag taskId={taskId} />
    }
  }
  return <div className="flex gap-2 ">{getStatusComponent(status)}</div>
}
