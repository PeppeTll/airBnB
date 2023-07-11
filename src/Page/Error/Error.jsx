import { Link } from "react-router-dom";
import styles from "./index.module.scss";

export default function () {
	return (
		<div className={styles.Error}>
			<title className={styles.Error__title}> Page Not Found </title>
			<img
				className={styles.Error__img}
				src="https://i.ibb.co/W6tgcKQ/softcodeon.gif"
			/>
			<h1 className={styles.Error___error__text}>
				Whoops, We can't seem to find the resource you're looking for.
			</h1>
			<p className={styles.Error__text}>
				Please check that the Web site address is spelled correctly.Or,
			</p>
			<div className={styles.Error__btn1}>
				<Link className={styles.Error__error} to="/">
					Go to Homepage
				</Link>
			</div>
		</div>
	);
}
