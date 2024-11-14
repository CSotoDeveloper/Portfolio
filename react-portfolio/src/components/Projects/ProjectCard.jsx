import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({project: {title, imageSrc, description, skills, demo, source}}) => {
  return (
    <div className={styles.container}>
    <img className={styles.image} src={getImageUrl(imageSrc)} alt={`Proyecto de ${title}`} />
    <ul className={styles.skills}>
        {skills.map((skill,index) =>{
          return  <li key={index} className={styles.skill}> {skill} </li>})}
    </ul>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        <div className={styles.links}>
            <a className={styles.link} href={demo} target="_blank" rel="noopener noreferrer">App</a>
        <a className={styles.link} href={source} target="_blank" rel="noopener noreferrer">Code</a>
        </div> 
</div>
  )
}
