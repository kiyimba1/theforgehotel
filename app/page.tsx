import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./ui/HeroBarnner/Hero";
import HistorySection from "./ui/HistorySection/HistorySection";
import ServicesSection from "./ui/Services/ServicesSection";

export default function Home() {
	return (
		<div className={styles.container}>
			<Hero />
			<HistorySection />
			<ServicesSection />
		</div>
	);
}
