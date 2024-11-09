import React from 'react';
import styles from './Project.module.css';

interface ProjectCardProps {
    project_name: string;
    project_description: string;
    github_link: string;
    image_name: string;
    image_src: string;
    tech_stack: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    project_name,
    project_description,
    github_link,
    image_name,
    image_src,
    tech_stack
}) => {
    return (
        <div className="text-left border border-gray-300 rounded-lg w-[15vw] h-[35vh] shadow-lg">
            <img src={image_src} alt={image_name} className={styles.image} />

            <div className="p-3 relative h-full">
                <h2 className={styles.projectName}>{project_name}</h2>

                <p className={styles.projectDescription}>{project_description}</p>

                <div className={styles.techStack}>
                    {tech_stack.map((tech, index) => (
                        <span key={index} className={styles.techItem}>{tech}</span>
                    ))}
                </div>

                <a href={github_link} className={styles.link} target='_blank' rel='noopener noreferrer'>
                    <img src="/github_logo.png" alt="github_logo" className='h-5 w-5 absolute bottom-[110px] left-10px' />
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
