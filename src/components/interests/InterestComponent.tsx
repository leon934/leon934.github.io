import React from 'react';
import styles from './Interest.module.css';

interface InterestComponentProps {
    title: string;
    description: string;
}

export const InterestComponent: React.FC<InterestComponentProps> = ({
    title,
    description 
}) => {
    return (
        <li className='border border-gray-300 mb-8 shadow-lg rounded-xl p-10'>
            <div className={styles.aboutItem}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </li>
    );
}

export default InterestComponent;
