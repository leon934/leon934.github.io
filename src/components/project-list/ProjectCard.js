import React from 'react'
import styles from './Project.module.css'

export const ProjectCard = ({
    project_name,
    project_description,
    github_link,
    image_name,
    image_src,
    tech_stack
}) => {
  return (
    <div className={styles.projectCard}>
        <img src={image_src} alt={image_name} className={styles.image} />

        <div className={styles.projectCardText}>
            <h2 className={styles.projectName}>{project_name}</h2>

            <p className={styles.projectDescription}>{project_description}</p>

            <div className={styles.techStack}>
                {tech_stack.map((tech, index) => (
                    <span key={index} className={styles.techItem}>{tech}</span>
                ))}
            </div>

            <a href={github_link} className={styles.link}>
                <img src="/github_logo.png" alt="github_logo" target='_blank' style={{height: '20px', width:'20px'}}/>
            </a>
        </div>
        
    </div>
  )
}

export default ProjectCard

// , bottom:'0', left:'0', alignSelf:'flex-start'