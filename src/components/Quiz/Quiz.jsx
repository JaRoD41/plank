import { useState, useEffect } from 'react'

export default function Quiz(props) {
	const [time, setTime] = useState(0)
	const [loops, setLoops] = useState(0)

	const timeInput = (e) => {
		setTime(e)
	}
	const loopsInput = (e) => {
		setLoops(e)
	}

	console.log(time)
	return (
		<section>
			<h1>Bienvenue sur Chrono Plank</h1>
			<div className="inputContainer">
				<p>durée de l'exercice :</p>
				<input
					type="text"
					value={time}
					onInput={(e) => timeInput(e.target.value)}
				/>
				<p>Nombre de répétitions :</p>
				<input
					type="text"
					value={loops}
					onInput={(e) => loopsInput(e.target.value)}
				/>
			</div>
		</section>
	)
}
