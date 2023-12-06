import styles from "./card.module.css";

const Card = ({ service, index }: any) => {
	return (
		<div className={`${styles.container} ${index==1?'coloredBg':''}`}>
			<div className={styles.icon}>{service.icon}</div>
			<div className={styles.title}>
				<h3>{service.name}</h3>
			</div>
			<div className={styles.description}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, omnis?
			</div>
		</div>
	);
};
export default Card;
