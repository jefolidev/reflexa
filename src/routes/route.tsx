import { Route, Routes } from 'react-router'
import { DefaultLayout } from '../layouts/default'
import { TasksLayout } from '../layouts/tasks'
import { DashboardPage } from '../pages/dashboard'
import { CompletedTasksPage } from '../pages/tasks/completed'
import { OtherWeeksTasksPage } from '../pages/tasks/other-weeks'
import { PendingTasksPage } from '../pages/tasks/pending'
import { UncompletedTasksPage } from '../pages/tasks/uncompleted'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/tasks" element={<TasksLayout />}>
          <Route path="pending" element={<PendingTasksPage />} />
          <Route path="uncompleted" element={<UncompletedTasksPage />} />
          <Route path="completed" element={<CompletedTasksPage />} />
          <Route path="other-weeks" element={<OtherWeeksTasksPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
