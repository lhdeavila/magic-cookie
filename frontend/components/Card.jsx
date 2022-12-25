import React from 'react'

export default function Card({tool, description, id, url}) {
	return (
		<div className="pentesting-tool__card card border-secondary mb-3" style={{maxWidth: '20rem'}}>
		<div className="card-header">id: {id}</div>
		<div className="card-body">
			<h3 className="card-title"> <strong>
			{tool}</strong></h3>
			<p className="card-text pentesting-tools__description text-muted">{description}</p>
		</div>
			<button type="button" className="btn btn-outline-light" href={url}>Docs</button>
		</div>
	)
}
