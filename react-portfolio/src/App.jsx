import styles from './App.module.css'
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Education } from "./components/education/Education";
import { Experience } from "./components/experience/Experience";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";

function App() {

  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience /> 
        <Education />
        <Projects />
        <Contact />
      </div>


    </>
  )
}

export default App

