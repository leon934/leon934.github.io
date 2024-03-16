import React from 'react'
import styles from "./Self.module.css"
import '../style.css'

export const Self = () => {
  return (
    <section className={`container ${styles.container}`} id="self">
      <div className={styles.content}>
        <h1 className={styles.title}>
          howdy! i'm leon;
        </h1>

        <pre className={styles.description}>
          {'a prospective computer science major at Texas A&M interested in web\ndevelopment and artificial intelligence to innovate brilliant solutions'}
        </pre>
      </div>
      <img src="/heroicon.png" alt="heroicon2" className={styles.image}/>
    </section>
  )
}

export default Self;