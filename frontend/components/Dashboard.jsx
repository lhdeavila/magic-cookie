
import database from "../../toolsDb"
import Card from "./Card"

export default function Dashboard() {
	return (
		<main>
		<div id="pentesting-tools">
		{database.map(key =>
		<Card id={key.id} tool={key.tool} description={key.description} url={key.url} />)}
		</div>
		</main>
	)
}
