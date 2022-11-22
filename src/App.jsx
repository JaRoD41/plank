import { Routes, Route } from 'react-router-dom'
import ChronoPage from './pages/ChronoPage'
import QuizPage from './pages/QuizPage'
import Error from './pages/Error'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<QuizPage />} />
				<Route path="/chrono" element={<ChronoPage />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	)
}

export default App
