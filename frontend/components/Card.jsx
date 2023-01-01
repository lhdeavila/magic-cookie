import Link from "next/link";

const Card = ({ tool, description, id, url }) => (
  <div
    className="pentestingtool card border-secondary mb-3 acord"
    style={{ maxWidth: "20rem" }}
    alt={tool}
  >
    <div className="pentestingtool__id card-header"> id: {id}</div>
		<Link href="#" type="checkbox" className="pentestingtool__input">
			<div className="card-body pentestingtool__body">
				<h3 className="pentestingtool__title card-title">
          <strong> {tool} </strong>
        </h3>
				{/* if checkbox show description */}
        <p className="card-text pentestingtool__description text-muted content">
          {description}
        </p>
      </div>
    </Link>

		<Link href={url} type="button" className="btn btn-outline-light">
      Doc
		</Link>
  </div>
);

export default Card;
