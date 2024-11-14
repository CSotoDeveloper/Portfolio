import React from 'react';
import courses from "../../data/courses.json";
import { getImageUrl } from "../../utils";
import styles from "./EducationCourses.module.css";

export const EducationCourses = () => {
  return (

<div className={styles.contentCourses}>
<h2 className={styles.title}>Courses</h2>
        <ul className={styles.educationCourses} >
        {courses.map((course, index) => (
          <li className={styles.course} key={index}>
            <div className={styles.courseContainer}>
            <img className={styles.logo} src={getImageUrl(course.image)} alt="" />
            <a href={course.link}>
            <h3>{course.course}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>Estado: {course.status}</p>
            </a>
            </div>
            </li>
        ))}
        </ul>
        </div>
       
  );
};
