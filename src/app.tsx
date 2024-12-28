import { BrowserRouter } from 'react-router'
import { DateProvider } from './contexts/date-context'
import { GoalsProvider } from './contexts/goals-context'
import { ModalProvider } from './contexts/modal-context'
import { Router } from './routes/route'

export function App() {
  return (
    <BrowserRouter>
      <DateProvider>
        <GoalsProvider>
          <ModalProvider>
            <Router />
          </ModalProvider>
        </GoalsProvider>
      </DateProvider>
    </BrowserRouter>
  )
}
