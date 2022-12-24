import React from 'react'

export default function Card({title, description, id, url}) {
	return (
		<div className="card border-secondary mb-3" style={{maxWidth: '20rem'}}>
		<div className="card-header">number: {id}</div>
		<div className="card-body">
			<h4 className="card-title">{title}</h4>
			<p className="card-text">{description}</p>
		</div>
			<button type="button" class="btn btn-outline-light" href={url}>Docs</button>
		</div>
	)
}
