import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./Education.module.css";
import { EducationCourses } from "./EducationCourses";

export const Education = () => {
  return (

<section  id="education">
  
  <div className={styles.container}>

      <div className={styles.contentCareer}>
        <h2 className={styles.title}>University</h2>
        <ul className={styles.education}>
          <li className={styles.educationContainer}>
            <div>
            <img className={styles.educationLogo} src={getImageUrl("education/tecnm.png")} alt="" />
            <img className={styles.logocircle} src={getImageUrl("education/tecnmcircle.png")} alt="" />
            </div>
            <div>
            <h3>Industrial Engineer  </h3>
            <p className={styles.itcm}>Instituto Tecnológico Nacional de México (ITCM)</p>
            <p className={styles.date}>(2019 - 2024)</p>

            </div>
          </li>
          <li className={styles.educationContainer}>
            <div>
          <img className={styles.educationLogo} src={getImageUrl("education/tecnm.png")} alt="" />
            <img className={styles.logocircle} src={getImageUrl("education/tecnmcircle.png")} alt="" />
          </div>
          <div>
          <h3>Science Computation Engineer </h3>
            <p className={styles.itcm}>Instituto Tecnológico Nacional de México (ITCM)</p>
            <p className={styles.date}>(2017-2019)</p>
            </div>
          </li>
        </ul>
        </div>
        
        <div>
        <EducationCourses />
        </div>
        </div>
    </section>
  );
};
