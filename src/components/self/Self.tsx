import React from 'react';
// import styles from './Self.module.css';
// import '../style.css';
import { motion, Variants } from 'framer-motion';
import { text } from 'framer-motion/client';

export const Self: React.FC = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4
      }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7}
    }
  };

  return (
    <section className="flex items-center justify-around min-h-[95vh]" id="self">
      <div className="flex flex-col items-start">
        <motion.div
          viewport={{ once: true }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
            <motion.h1
              variants={textVariants}
            >
              <h1 className="text-5xl sm:text-7xl font-semibold mb-4">
                howdy! i'm leon;
              </h1>
            </motion.h1>

            <motion.pre
              variants={textVariants}
            >
              <pre className="text-justify text-sm sm:text-lg">
                {'a prospective computer science major at Texas A&M interested in web\ndevelopment and artificial intelligence to innovate brilliant solutions'}
              </pre>
            </motion.pre>
        </motion.div>
        
      </div>
      <img src="/heroicon.png" alt="heroicon2" className="h-[60vh]" />
    </section>
  );
}

export default Self;