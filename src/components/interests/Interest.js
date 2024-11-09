import React from 'react'
import styles from './Interest.module.css'
import '../style.css'
import InterestComponent from './InterestComponent'

export const Interest = () => {
  return (
    <section className="container">
        <h1 className="title" id="interests">
            interests
        </h1>

        <div className={styles.content}>
            <img src="/runner.png" alt="runner" className={styles.image}/>

            <ul className={styles.list}>
                <InterestComponent
                    title='hiking'
                    description='i love to hike with my friends! the Colorado Bend was the last national park i went to and we hiked 12 miles!'
                />

                <InterestComponent 
                    title='origami'
                    description="i'm an avid folder of paper! i love doing origami for those close to me! i've created elephants, flowers, and giraffes for my friends."
                />

                <InterestComponent 
                    title='racquet sports'
                    description="i started playing tennis and table tennis in high school and i've loved it ever since. i recently picked up pickleball as i love tennis but don't like moving all the time..."
                />

                <InterestComponent 
                    title='video games'
                    description="i love playing games when i'm not working on school work or projects, especially strategy games such as Teamfight Tactics."
                />
            </ul>
        </div>
    </section>
  )
}

export default Interest