import React from 'react'

export default function Chrono({ time, loops }) {
  return (
		<div>
			<p>
				{loops} répétitions de {time} secondes
			</p>
		</div>
	)
}
