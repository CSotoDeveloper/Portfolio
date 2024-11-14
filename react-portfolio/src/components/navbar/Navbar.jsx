import React, { useState, useEffect } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";

export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [showScrollToTop, setShowScrollToTop] = useState(false); // Estado para mostrar el botón

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 700) {
				// Cambia 300 por la cantidad de píxeles que desees
				setShowScrollToTop(true);
			} else {
				setShowScrollToTop(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup al desmontar el componente
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<nav className={styles.navbar}>
				<a className={styles.title} href="/">
					{"{ Portfolio }"}
				</a>
				<div className={styles.menu}>
					<img
						className={styles.menuBtn}
						src={
							menuOpen
								? getImageUrl("nav/closeIcon.png")
								: getImageUrl("nav/menuIcon.png")
						}
						alt="menu button"
						onClick={() => setMenuOpen(!menuOpen)}
					/>
					<ul
						className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
						onClick={() => {
							setMenuOpen(false);
						}}
					>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#experience">Experience</a>
						</li>
						<li>
							<a href="#education">Education</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
			{showScrollToTop && (
				<button className={styles.scrollToTop} onClick={scrollToTop}>
					↑
				</button>
			)}
		</>
	);
};
