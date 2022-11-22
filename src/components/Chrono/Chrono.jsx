import React from 'react'

export default function Chrono({loops, time}) {
  return (
		<div>
			<p>
				{loops} répétitions de {time} secondes
			</p>
		</div>
	)
}
