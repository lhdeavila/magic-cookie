
import database from "../../../toolsDb";
import Card from "../Card";
import styles from './dashboard.module.css';

const ToolList = database.map(data =>
	<Card
	id={data.id}
	tool={data.tool}
	description={data.description}
	url={data.url}
	/>
	)

export default function Dashboard() {

	return (
	<div className="section__padding  pentestingtools__dashboard" id="dashboard">
				<div className={styles.pentestingtools__dashboard_container}>
					<div className={styles.pentestingtools__dashboard_container_groupB}>
					{ ToolList }
				</div>
				</div>
		</div>
	)
};
