import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:carlos.a.soto.gamez@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/carlos-soto-gamez/" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/CSOTODEVELOPER" target="_blank" rel="noopener noreferrer">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
