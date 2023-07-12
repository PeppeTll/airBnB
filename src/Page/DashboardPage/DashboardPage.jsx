import { useEffect, useState } from "react";
import styles from "./index.module.scss";

//Components
import Dashboard from "../../Components/Dashboard";

export default function DashboardPage() {
	return (
		<div className={styles.DashboardPage}>
			<Dashboard />
		</div>
	);
}
