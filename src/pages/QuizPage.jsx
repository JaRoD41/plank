import { useState } from 'react'
import { Link } from 'react-router-dom'
import Quiz from '../components/Quiz/Quiz'

export default function QuizPage({ time, loops }) {
	console.log('time dans quizpage :', time)
	console.log('loops dans quizpage :', loops)
	return (
		<section className="quiz-container">
			<Quiz time={time} loops={loops} />
			<nav className="chronoLinkContainer">
				<Link to={`/chrono`}>
					<button className="startButton">Let's GO !</button>
				</Link>
			</nav>
		</section>
	)
}
