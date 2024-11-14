import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"


export const Hero = () => {
  return(
  <section className={styles.container}>
    <div className={styles.content}>
    <img className={styles.heroImgHide} src={getImageUrl("hero/me.png")} alt="Yo" />
 
        <h1 className={styles.title}>Carlos Soto</h1>
        <p className={styles.description}> 
          <span>Industrial Engineer & Software Developer </span> 
          with over 2 years of experience in data analysis, making a career shift to work in what I am most passionate about <span>Software Development.</span> </p>
                <div className={styles.contactBtnWrap}>

          <div className={styles.contactBtn}>
            <a href={getImageUrl("hero/CVCarlosSotoEn.pdf")}  target="_blank" rel="noopener noreferrer">Check Resume</a>

          </div>
          
       </div>
    </div>
    <img className={styles.heroImg} src={getImageUrl("hero/me.png")} alt="Yo" />
    <div className={styles.topBlur}/>
    <div className={styles.botoomBlur}/>
  </section>)
}
