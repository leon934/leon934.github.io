import React from 'react'
import styles from './Contact.module.css'

export const ContactComponent = ({
    image_src,
    image_name,
    contact_title,
    contact_description
}) => {
  return (
    <li className={styles.item}>
        <img src={image_src} alt={image_name} />

        <div className={styles.aboutItem}>
            <h2>
                {contact_title}
            </h2>

            <p>
                {contact_description}
            </p>
        </div>
    </li>
  )
}

export default ContactComponent

// , bottom:'0', left:'0', alignSelf:'flex-start'