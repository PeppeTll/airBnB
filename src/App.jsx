//style
import styles from "./App.module.scss";

import { useState } from "react";

//Components
import Header from "./Components/Header";

function App() {
	return (
		<div className={styles.App}>
			<Header />
		</div>
	);
}

export default App;
