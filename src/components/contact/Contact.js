import React from 'react'
import '../style.css'
import styles from './Contact.module.css'
import ContactComponent from './ContactComponent'

export const Contact = () => {
  return (
    <section className='container'>
        <h1 className='title' id='contact'>
            contact me!
        </h1>

        <div className={styles.content}>
          <ul className={styles.list}>
              <li className={styles.item}>
                  <div className={styles.aboutItem}>
                      <h2>
                          hiking
                      </h2>

                      <p>
                          i love to hike with my friends! the Colorado Bend was the last national i went to and we hiked 12 miles!
                      </p>
                  </div>
              </li>

              <li className={styles.item}>
                  <div className={styles.aboutItem}>
                      <h2>
                          origami
                      </h2>

                      <p>
                          i'm an avid folder of paper! i love doing origami for those close to me! i've created elephants, flowers, and giraffes for my friends.
                      </p>
                  </div>              
              </li>

              <li className={styles.item}>
                  <div className={styles.aboutItem}>
                      <h2>
                          tennis/pickleball
                      </h2>
                          i started playing tennis in high school and i've loved it ever since. i recently picked up pickleball as i love tennis but don't like moving all the time :D!
                      <p>

                      </p>
                  </div>
              </li>

              <li className={styles.item}>
                  <div className={styles.aboutItem}>
                      <h2>
                          video games
                      </h2>
                          i love playing games when i'm not working on school work or projects, especially strategy games such as Teamfight Tactics.
                      <p>

                      </p>
                  </div>
              </li>
          </ul>
            <img src="/runner.png" alt="runner" className={styles.image}/>
        </div>
    </section>
        
  )
}

export default Contact