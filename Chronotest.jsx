import { useState, useEffect, useReducer } from 'react'
import './Chrono.css'
import PauseImg from '../Images/pause.svg'
import PlayImg from '../Images/play.svg'
import ResetImg from '../Images/reset.svg'

export default function Chrono() {
	
	const [sessionTimeFixed, setSessionTimeFixed] = useState(60)
  const [sessionTime, setSessionTime] = useState(sessionTimeFixed)

	const [breakTime, setBreakTime] = useState(Math.trunc(sessionTime * 0.68))
	const [breakTimeFixed, setBreakTimeFixed] = useState(
		Math.trunc(sessionTime * 0.68)
	)

	const [workingChrono, setWorkingChrono] = useState(false)

	const [state, dispatch] = useReducer(reducer)

	function reducer(state, action) {
		switch (action.type) {
			case 'TICK':
				if (sessionTime >= 0) {
					setSessionTime(sessionTime - 1)
				} else if (breakTime >= 1) {
					setBreakTime(breakTime - 1)
				} else if (sessionTime <= 0 && breakTime <= 0) {
					setSessionTime(sessionTimeFixed)
					setBreakTime(breakTimeFixed)
				}
		}
	}

	useEffect(() => {
		let id
		if (workingChrono) {
			id = window.setInterval(() => {
				dispatch({ type: 'TICK' })
			}, 1000)
		}

		return () => {
			window.clearInterval(id)
		}
	}, [workingChrono])

	const playPause = () => {
		setWorkingChrono(!workingChrono)
	}

	const handleSession = (e) => {
		const el = e.target
		if (el.classList.contains('minus')) {
			if (sessionTime / 60 > 1) {
				setSessionTime(sessionTime - 60)
        sessionTimeFixed(sessionTimeFixed - 60)
			}
		} else if (el.classList.contains('plus')) {
			if (sessionTime / 60 > 1) {
				setSessionTime(sessionTime + 60)
				sessionTimeFixed(sessionTimeFixed + 60)
			}
		}
	}

  const resetFunc = () => {
		if (workingChrono) {
			setWorkingChrono(!workingChrono)
		}
    setSessionTime(sessionTimeFixed)
		setBreakTime(breakTimeFixed)
  }

	return (
		<div className="container-chrono">
			<div className="container-config">
				<div className="box-btns session">
					<button className="minus" onClick={handleSession}>
						-
					</button>
					<span>{sessionTimeFixed}</span>
					<button className="plus" onClick={handleSession}>
						+
					</button>
				</div>
				<div className="box-btns break">
					<span>{breakTimeFixed}</span>
				</div>
			</div>
			<h1>
				{sessionTime >= 0 ? (
					<span>
						{`${Math.trunc(sessionTime / 60)} : ${
							sessionTime % 60 < 10
								? `0${sessionTime % 60}`
								: `${sessionTime % 60}`
						}`}
					</span>
				) : (
					<span>
						{`${Math.trunc(breakTime / 60)} : ${
							sessionTime % 60 < 10 ? `0${breakTime % 60}` : `${breakTime % 60}`
						}`}
					</span>
				)}
			</h1>
			<div className="container-controllers">
				<button onClick={playPause}>
					<img src={workingChrono ? PauseImg : PlayImg} alt="bouton play" />
				</button>
				<button onClick={resetFunc}>
					<img src={ResetImg} alt="bouton reset" />
				</button>
			</div>
		</div>
	)
}
