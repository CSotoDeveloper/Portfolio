import React from 'react'
import history from "../../data/history.json"
import skills from "../../data/skills.json"
import { getImageUrl } from "../../utils";

import styles from "./Experiences.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill,index)=>{
            return (
              <div key={index} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
              </div>
            )
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, index) => {
            return (
              <li key={index} className={styles.historyItem}> 
                  <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
                  <div className={styles.historyItemDetails}>
                    <h3>{`${historyItem.role},`} <span>{`${historyItem.organisation}`}</span></h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>{historyItem.experiences.map((experience,index) =>{
                      return <li key={index}>{experience}</li>                  
                    })}</ul>
                  </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
