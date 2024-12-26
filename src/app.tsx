import { BrowserRouter } from 'react-router'
import { GoalsProvider } from './contexts/goals-context'
import { ModalProvider } from './contexts/modal-context'
import { Router } from './routes/route'

export function App() {
	return (
		<BrowserRouter>
			<GoalsProvider>
				<ModalProvider>
					<Router />
				</ModalProvider>
			</GoalsProvider>
		</BrowserRouter>
	)
}
