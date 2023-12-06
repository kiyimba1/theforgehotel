"use client";

import { useState } from "react";
import styles from "./navbar.module.css";

import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handleToggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};
	return (
		<nav className={styles.nav}>
			<div className={styles.navItems}>
				<div className={styles.logo}>HBT</div>
				<button onClick={handleToggleNav} className={styles.toggleMenu}>
					{isNavOpen ? <IoMdClose /> : <IoIosMenu />}
				</button>
				<div className={styles.largeSizeMenuItems}>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</div>
			</div>
			<div
				className={
					isNavOpen ? `${styles.menuItems}` : `${styles.menuItemsHidden}`
				}>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;
