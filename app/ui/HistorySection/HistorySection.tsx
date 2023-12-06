import Image from "next/image";
import styles from "./HistorySection.module.css";
import Link from "next/link";

const HistorySection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.historyImage}>
				<img src="/images/hotel_front.jpg" alt="Hotel Front" />
			</div>
			<div className={styles.historyContent}>
				<h1>
					<span className={styles.colored}>The History</span> Of Our Hotel.
				</h1>

				<div className={styles.details}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
						voluptatem quam officiis reiciendis eius nulla aliquam similique
						nisi illo impedit laborum, laboriosam voluptatum quasi veritatis
						quidem voluptates velit totam doloremque.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
						doloremque nulla accusamus exercitationem.
					</p>
				</div>

				<Link href="/about" className={styles.button}>
					Read More
				</Link>
			</div>
		</div>
	);
};
export default HistorySection;
