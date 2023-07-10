//style
import styles from "./App.module.scss";

import { useState } from "react";

//Components
import Header from "./Components/Header";
import { Outlet } from "react-router";

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<Outlet />
		</div>
	);
}

export default App;
