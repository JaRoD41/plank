import { useState, useEffect } from 'react'

export default function Quiz() {
	const [time, setTime] = useState(0)
	const [loops, setLoops] = useState(0)

	const timeInput = (e) => {
		setTime(e)
	}
	const loopsInput = (e) => {
		setLoops(e)
	}

	return (
		<>
			<h1 className="quizTitle">Bienvenue sur Chrono Plank</h1>
			<div className="inputContainer">
				<section className='input-block'>
					<p>durée de l'exercice (secondes):</p>
					<input
						type="text"
						value={time}
						onInput={(e) => timeInput(e.target.value)}
					/>
				</section>
				<section className='input-block'>
					<p>Nombre de répétitions :</p>
					<input
						type="text"
						value={loops}
						onInput={(e) => loopsInput(e.target.value)}
					/>
				</section>
			</div>
		</>
	)
}
