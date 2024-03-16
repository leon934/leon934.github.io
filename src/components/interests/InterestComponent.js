import React from 'react'
import styles from './Interest.module.css'

export const InterestComponent = ({
    title,
    description 
}) => {
  return (
    <li className={styles.item}>
        <div className={styles.aboutItem}>
            <h2>
                {title}
            </h2>

            <p>
                {description}
            </p>
        </div>
    </li>
  )
}

export default InterestComponent