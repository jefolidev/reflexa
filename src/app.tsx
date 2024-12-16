import { BrowserRouter } from 'react-router'
import { GoalsProvider } from './contexts/goals-context'
import { Router } from './routes/route'

export function App() {
  return (
    <BrowserRouter>
      <GoalsProvider>
        <Router />
      </GoalsProvider>
    </BrowserRouter>
  )
}
