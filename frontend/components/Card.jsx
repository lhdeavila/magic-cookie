import Link from 'next/link'

const Card = ({tool, description, id, url}) => (
	<div
		className="pentesting-tool__card card border-secondary mb-3 acord"
		style={{maxWidth: '20rem'}}
		alt={tool}
		>

		<div
		className="pentesting-tool__header card-header"
		> id: {id}
		</div>

		<Link href="#" type="checkbox" className="pentesting-tool__input">
			<div
		className="card-body pentesting-tool__body">
			<h3
			className="pentesting-tool__title card-title">
			<strong
			> 	{tool}
			</strong>
			</h3>
			<p
			className="card-text pentesting-tool__description text-muted content"
			>	  {description}
			</p>
		</div></Link>
		<Link
			href={url}
		type="button"
		className="btn btn-outline-light"
		>
			Doc
		</Link>
	</div>
);

export default Card;
