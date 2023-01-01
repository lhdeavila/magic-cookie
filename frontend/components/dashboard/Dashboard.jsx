
import database from "../../../toolsDb";
import Card from "../Card";
import styles from './dashboard.module.css';

export default function Dashboard() {
	const ToolList = database.map( key => <Card id={key.id} tool={key.tool} description={key.description} url={key.url} /> );

	return (
	<div className="section__padding  pentestingtool__dashboard" id="dashboard">
				<div className={styles.pentestingtool__dashboard_container}>
					<div className={styles.pentestingtool__dashboard_container_groupB}>
					{ ToolList }
				</div>
			</div>
		</div>
	)
};
