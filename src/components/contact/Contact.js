import React from 'react'
import '../style.css'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <section className='container'>
        <h1 className='title' id='contact'>
            contact me!
        </h1>

        <div className={styles.contactPage}>
            <div className={styles.leftSide}>
                <div className={`box ${styles.infoCard}`}>
                    <h2>
                        let's get in touch.
                    </h2>

                    <div className={styles.iconLinks}>
                        <a href="https://github.com/leon934">
                            <img src="/github_logo.png" alt="github_logo" className={styles.image}/>
                        </a>

                        <a href="mailto:leonlnguyen93@gmail.com">
                            <img src="/mail_logo.png" alt="mail_logo" className={styles.image}/>
                        </a>

                        <a href="https://www.linkedin.com/in/leonlnguyen/">
                            <img src="/linkedin_logo.png" alt="linkedin_logo" className={styles.image}/>
                        </a>
                    </div>
                </div>

                <img src="./astronaut.png" alt="astronaut" className={styles.astronautImage}/>
            </div>

            <div className={styles.contactCard}>
                <img src="/blue_background.png" alt="card" className={styles.backgroundImage}/>

                <div className={styles.contactText}>
                    <div className={styles.form}>
                        <h3>
                            name:
                        </h3>

                        <form action="tbd" id="tbd">
                            <input name="name" id="name" placeholder="name" className={styles.formBox}/>
                        </form>
                    </div>

                    <div className={styles.form}>
                        <h3>
                            email:
                        </h3>

                        <form action="tbd" id="tbd">
                            <input email="email" id="email" placeholder="user@gmail.com" className={styles.formBox}/>
                        </form>
                    </div>

                    <div className={styles.form}>
                        <h3>
                            message:
                        </h3>

                        <form action="tbd" id="tbd">
                            <textarea placeholder="message" className={styles.textBox}></textarea>
                        </form>
                    </div>
                </div>

                <img src="/send_button.png" alt="send_button" style={{width:"130px", marginLeft:"40px"}}/>
            </div>
        </div>

    </section>
        
  )
}

export default Contact