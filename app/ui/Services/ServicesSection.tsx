import styles from "./services.module.css";

import { BsBuildingsFill } from "react-icons/bs";
import { GiKnifeFork } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import Card from "../card/Card";

const services = [
	{
		name: "Great Location",
		icon: <BsBuildingsFill size={70} />,
	},
	{
		name: "Free Meals",
		icon: <GiKnifeFork size={70} />,
	},
	{
		name: "Fitness Room",
		icon: <IoIosFitness size={70} />,
	},
];

const ServicesSection = () => {
	return (
		<div className={styles.container}>
			{services.map((service, index) => (
				<Card service={service} index={index} key={service.name} />
			))}
		</div>
	);
};
export default ServicesSection;
