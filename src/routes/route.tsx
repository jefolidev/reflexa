import { Route, Routes } from 'react-router'
import { DefaultLayout } from '../layouts/default'
import { DashboardPage } from '../pages/dashboard'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}
