import React from 'react';
import styles from './Interest.module.css';
import '../style.css';
import InterestComponent from './InterestComponent.tsx';
import { motion, Variants } from 'framer-motion';

interface InterestProps {
    title: string;
    description: string;
}

const Interest: React.FC = () => {
    const interestVariants: Variants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    const interests = [
        {
            title: 'hiking',
            description: 'I love to hike with my friends! The Colorado Bend was the last national park I went to and we hiked 12 miles!'
        },
        {
            title: 'origami',
            description: "I'm an avid folder of paper! I love doing origami for those close to me! I've created elephants, flowers, and giraffes for my friends."
        },
        {
            title: 'racquet sports',
            description: "I started playing tennis and table tennis in high school and I've loved it ever since. I recently picked up pickleball as I love tennis but don't like moving all the time..."
        },
        {
            title: 'video games',
            description: "I love playing games when I'm not working on school work or projects, especially strategy games such as Teamfight Tactics."
        }
    ];

    return (
        <section className="container">
            <h1 className="title" id="interests">
                interests
            </h1>

            <div className="flex flex-row justify-stretch">
                <img src="/runner.png" alt="runner" className='w-[30vw] mr-5 flex-none' />

                <ul className=''>

                {interests.map((interest, index) => (
                    <motion.li 
                        key={index} 
                        variants={interestVariants} 
                        initial="offscreen" 
                        whileInView="onscreen" 
                        viewport={{ once: true}}
                    >
                        <InterestComponent title={interest.title} description={interest.description} />
                    </motion.li> 
                ))}
                </ul>
            </div>
        </section>
    );
}

export default Interest;
