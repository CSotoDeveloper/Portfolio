import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
	return (
		<section className={styles.container} id="about">
			<h2 className={styles.title}>About</h2>
			<div className={styles.content}>
				<img
					src={getImageUrl("about/aboutImageno.png")}
					alt="Yo"
					className={styles.aboutImage}
				/>

				<ul className={styles.aboutItems}>
					<li className={styles.aboutItem}>
						<img
							src={getImageUrl("about/cursorIcon.png")}
							alt="Cursor Icon"
							className={styles.aboutItems}
						/>
						<div className={styles.aboutItemText}>
							<h3>Frontend Developer</h3>
							<p>
								I am a Frontend Developer with experience in responsive web
								development, creating intuitive and attractive interfaces that
								enhance the user experience.
							</p>
						</div>
					</li>
					<li className={styles.aboutItem}>
						<img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
						<div className={styles.aboutItemText}>
							<h3>Backend Developer</h3>
							<p>
								I have experience in developing systems and APIs, ensuring
								smooth integration between the front-end and back-end, and
								optimizing application performance.
							</p>
						</div>
					</li>
					<li className={styles.aboutItem}>
						<img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
						<div className={styles.aboutItemText}>
							<h3>UI Designer</h3>
							<p>
								I have designed multiple landing pages and design systems,
								focusing on usability and aesthetics to create effective visual
								solutions.
							</p>
						</div>
					</li>
					<li className={styles.aboutItem}>
						<img src={getImageUrl("about/serverIcon.png")} alt="UI Icon" />
						<div className={styles.aboutItemText}>
							<h3>Data Analyst</h3>
							<p>
								I have worked on data analysis and visualization, using Power
								BI, SQL, and Excel to create dashboards that drive
								decision-making.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};
