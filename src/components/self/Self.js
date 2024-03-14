import React from 'react'
import styles from "./Self.module.css"
import '../style.css'

export const Self = () => {
  return (
    <section className={styles.container} id="self">
      <div className={styles.content}>
        <h1 className={styles.title}>
          howdy! i'm leon;
        </h1>

        <pre className={styles.description}>
          {'a prospective computer science major at Texas A&M interested in web development\nand artificial intelligence to innovate brilliant solutions'}
        </pre>

        {/* move somewhere else
        <a href="mailto:leonlnguyen93@gmail.com" className={styles.contact}>Contact Me</a> */}
      </div>
      <img src="/heroicon2.png" alt="heroicon2" className={styles.image}/>
    </section>
  )
}

export default Self;