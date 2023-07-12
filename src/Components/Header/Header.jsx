import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";

const Header = () => {
	const location = useLocation();
	const [user, setUser] = useState({});

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("authUser")));
	}, [location]);

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
					<Link to="/login">Login</Link>
				</li>
				{user && (
					<li className={styles.Header__ul__li}>
						<Link to="/dashboard">Dashboard</Link>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Header;
