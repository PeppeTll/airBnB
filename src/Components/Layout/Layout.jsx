import styles from "./index.module.scss";

//Components
import Header from "../Header";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
	return (
		<div className={styles.Layout}>
			<Header />
			<div className={styles.Layout__children}>{children}</div>
			{/* <Footer /> */}
			<Outlet />
		</div>
	);
};

export default Layout;
