/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import styles from "./hero.module.css";

const Hero = () => {
	return (
		<div className="container">
			<div className={styles.heroImage}>
				<img
					className={styles.image}
					src="/images/hero_image.jpg"
					alt="Hotel Room"
				/>
				<div className={styles.tint}></div>
			</div>
			<div className={styles.heroText}>
				<div className={styles.title}>
					<h1>
						<span className={styles.colored}>Enjoy</span> Your Stay
					</h1>
				</div>
				<div className={styles.desc}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
					repudiandae, rem recusandae deserunt voluptas tempore.
				</div>

				<Link href="/about" className={styles.button}>
					About Our Hotel
				</Link>
			</div>
		</div>
	);
};
export default Hero;
