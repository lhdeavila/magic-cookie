import Link from 'next/link'
import React from 'react'

const Card = ({tool, description, id, url}) => (
	<div className="pentesting-tool__card card border-secondary mb-3" style={{maxWidth: '20rem'}} alt={tool}>
		<div className="pentesting-tool__header card-header">id: {id}</div>
		<div className="card-body pentesting-tool__body">
			<h3 className="pentesting-tool__title card-title"> <strong>
			{tool}</strong></h3>
			<p className="card-text pentesting-tool__description text-muted">{description}</p>
		</div>
		<Link href={url} type="button" className="btn btn-outline-light">

			Doc</Link>
		</div>
	);

	export default Card;
