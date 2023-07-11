import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Header = () => {
	return (
		<div className={styles.Header}>
			<img
				src="../../../public/pngegg.png"
				alt="logo"
				className={styles.Header__logo}
			/>
			<ul className={styles.Header__ul}>
				<li className={styles.Header__ul__li}>
					<Link to="/">Home</Link>
				</li>
				<li className={styles.Header__ul__li}>
					<Link to="/about">About</Link>
				</li>
				<li className={styles.Header__ul__li}>
					<Link to="/contacts">Contacts</Link>
				</li>
				<li className={styles.Header__ul__li}>
					<Link to="/location">Locations</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
