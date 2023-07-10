import styles from "./index.module.scss";

const Card = ({ data }) => {
	return (
		<div className={styles.Card}>
			<img src={data.thumbnail} alt={data.title} className={styles.Card__img} />
			<div className={styles.Card__info}>
				<div className={styles.Card__info__title}>
					<p className={styles.Card__info__title__p}>{data.title}</p>
					<p className={styles.Card__info__title__stars}>⭐ {data.rating}</p>
				</div>
				<p className={styles.Card__info__location}>
					{`${data.location.città}, ${data.location.paese}`}
				</p>
				<p className={styles.Card__info__price}>{`${data.price} € notte`}</p>
			</div>
		</div>
	);
};

export default Card;
