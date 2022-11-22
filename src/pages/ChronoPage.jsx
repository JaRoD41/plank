import Chrono from '../components/Chrono/Chrono'
import { Link } from 'react-router-dom'

export default function ChronoPage({time, loops}) {
  console.log('time dans chronopage :', time)
	console.log('loops dans chronozpage :', loops)
	return (
		<div className="chronoPageContainer">
			<section className="chronoContainer">
				<Chrono />
			</section>
			<nav className="homeLinkContainer">
				<Link className="homeLink" to={`/`}>
					<p>modifier le programme</p>
				</Link>
			</nav>
		</div>
	)
}
