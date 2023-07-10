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
				<li className={styles.Header__ul__li}>Home</li>
				<li className={styles.Header__ul__li}>About</li>
				<li className={styles.Header__ul__li}>Contatcs</li>
			</ul>
		</div>
	);
};

export default Header;
