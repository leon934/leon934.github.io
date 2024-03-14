import React from 'react'
import styles from "./Project.module.css"
import '../style.css'
import ProjectCard from './ProjectCard'

export const Project = () => {
  return (
    <section className={styles.container}>
        <h1 className="title" id="project">
            projects
        </h1>
    
        <p style={{fontSize: "20px"}}>currently working on...</p>

        <div className={styles.projects}>
            <div className={styles.currentProject}>
                <img src='./project_background.png' alt='current_project_background' className={styles.image1}/>

                <div className={styles.currentProjectCardText}>
                    <h2 className={styles.projectName}>word bites solver</h2>

                    <p className={styles.projectDescription}>
                        Utilizes an image processing algorithm to detect word board and put into matrix to be processed.
                        This is done by generating a permutation of strings, checking their validity against a given dictionary, 
                        and backtracking to check if the prefix of a permutation is valid.
                    </p>

                    <div className={styles.techStack}>
                        {['Python', 'Javascript', 'Flask', 'React', 'OpenCV', 'Pytesseract'].map((tech, index) => (
                            <span key={index} className={styles.techItem}>{tech}</span>
                        ))}
                    </div>

                    <a href='ewnfewnfkew' className={styles.link}>
                        <img src="/github_logo.png" alt="github_logo" style={{height: '20px', width:'20px'}}/>
                    </a>
                </div>
            </div>

            <div className={styles.projectCardList}>
                <ProjectCard
                    project_name="word bites solver"
                    project_description="solves Word Bites board given picture"
                    github_link="https://github.com/leon934/rowdyhack24"
                    image_name="card"
                    image_src="./project_background.png"
                    tech_stack={['Python', 'Javascript', 'Flask', 'React', 'OpenCV', 'Pytesseract']}
                />
                <ProjectCard
                    project_name="AIRcontrol"
                    project_description="attempts to automate air traffic at DFW airport"
                    github_link="https://github.com/leon934/tamuhack24"
                    image_name="card"
                    image_src="./project_background.png"
                    tech_stack={['React', 'MongoDB', 'Express.js', 'Node.js', 'Javascript']}
                />
                <ProjectCard
                    project_name="cherry curriculum"
                    project_description="helps people learn using concepts provided"
                    github_link="https://github.com/leon934/tidalhack23"
                    image_name="card"
                    image_src="./project_background.png"
                    tech_stack={['Python', 'OpenAI API']}
                />
                <ProjectCard
                    project_name="howdy habits"
                    project_description="daily habit tracker for business owners"
                    github_link="https://github.com/c2cBethany/23-HOWDYHACK"
                    image_name="card"
                    image_src="./project_background.png"
                    tech_stack={['Axios', 'Javascript', 'LowDB', 'Express.js']}
                />
                <ProjectCard
                    project_name="mortality predictor"
                    project_description="given specific set of data, predicts death based on medical data"
                    github_link="https://github.com/leon934/datathon2324"
                    image_name="card"
                    image_src="./project_background.png"
                    tech_stack={['Python', 'TensorFlow', 'pandas']}
                />
            </div>
        </div>

        
    </section>
  )
}

export default Project