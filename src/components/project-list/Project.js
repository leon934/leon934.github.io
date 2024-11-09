import React from 'react'
import styles from "./Project.module.css"
import '../style.css'
import ProjectCard from './ProjectCard'

export const Project = () => {
  return (
    <section className="container">
        <h1 className="title" id="project">
            projects
        </h1>
    
        <p style={{fontSize: "20px"}}>currently working on...</p>

        <div className={styles.projects}>
            <div className={styles.currentProject}>
                <img src='./blue_background.png' alt='current_blue_background' className={styles.image1}/>

                <div className={styles.currentProjectCardText}>
                    <h2 className={styles.projectName}>arcadia</h2>

                    <p className={styles.projectDescription}>
                        Done at HackTX 2024. This project utilizes computer vision and combines it with classic video games. 
                        Front end built with Three.js and React. Designed by me using Figma. Check it out at <a href='http://arcadium.tech' target='_blank'>arcadium.tech</a>
                    </p>

                    <div className={styles.techStack}>
                        {['next.js', 'React', 'Figma', 'Three.js', 'Mediapipe'].map((tech, index) => (
                            <span key={index} className={styles.techItem}>{tech}</span>
                        ))}
                    </div>

                    <a href='https://github.com/ericliu-12/hacktx24/' className={styles.link}>
                        <img src="/github_logo.png" alt="github_logo" style={{height: '20px', width:'20px'}}/>
                    </a>
                </div>
            </div>

            <div className={styles.projectCardList}>
                <ProjectCard
                    project_name="penman"
                    project_description="application that attempts to automatically solves handwritten equations"
                    github_link="https://github.com/leon934/penman"
                    image_name="card"
                    image_src="./blue_background.png"
                    tech_stack={['Python', 'React', 'Flask']}
                />

                <ProjectCard
                    project_name="word bites solver"
                    project_description="solves Word Bites board given picture"
                    github_link="https://github.com/leon934/rowdyhack24"
                    image_name="card"
                    image_src="./blue_background.png"
                    tech_stack={['Python', 'Javascript', 'Flask', 'React', 'OpenCV', 'Pytesseract']}
                />

                <ProjectCard
                    project_name="AIRcontrol"
                    project_description="attempts to automate air traffic at DFW airport"
                    github_link="https://github.com/leon934/tamuhack24"
                    image_name="card"
                    image_src="./blue_background.png"
                    tech_stack={['React', 'MongoDB', 'Express.js', 'Node.js', 'Javascript']}
                />

                <ProjectCard
                    project_name="cherry curriculum"
                    project_description="helps people learn using concepts provided"
                    github_link="https://github.com/leon934/tidalhack23"
                    image_name="card"
                    image_src="./blue_background.png"
                    tech_stack={['Python', 'OpenAI API']}
                />

                <ProjectCard
                    project_name="howdy habits"
                    project_description="daily habit tracker website to improve quality of life"
                    github_link="https://github.com/c2cBethany/23-HOWDYHACK"
                    image_name="card"
                    image_src="./blue_background.png"
                    tech_stack={['Axios', 'Javascript', 'LowDB', 'Express.js']}
                />

                <ProjectCard
                    project_name="mortality predictor"
                    project_description="given specific set of data, predicts death based on medical data"
                    github_link="https://github.com/leon934/datathon2324"
                    image_name="card"
                    image_src="./blue_background.png"
                    tech_stack={['Python', 'TensorFlow', 'pandas']}
                />
            </div>
        </div>

        
    </section>
  )
}

export default Project