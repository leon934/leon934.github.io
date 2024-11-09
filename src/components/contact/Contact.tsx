import React from 'react';
// import '../style.css';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
    return (
        <section className='position: relative m-[5%] h-[85vh]'>
            <h1 className='title' id='contact'>
                contact me!
            </h1>

            <div className='flex justify-between'>
                <div className="mr-10">
                    <div className='w-[30vw] border border-gray-300 rounded-lg p-6 shadow-lg'>
                        <h2>let's get in touch.</h2>

                        <div className="flex justify-center gap-20 mt-8">
                            <a href="https://github.com/leon934">
                                <img src="/github_logo.png" alt="github_logo" className={styles.image} />
                            </a>

                            <a href="mailto:leonlnguyen93@gmail.com">
                                <img src="/mail_logo.png" alt="mail_logo" className={styles.image} />
                            </a>

                            <a href="https://www.linkedin.com/in/leonlnguyen/">
                                <img src="/linkedin_logo.png" alt="linkedin_logo" className={styles.image} />
                            </a>

                            <a href="https://drive.google.com/file/d/1rQChhUjaispcJ0sEtpqndjX2v2nALKWN/view?usp=sharing">
                                <img src="/resume_logo.png" alt="resume_logo" className={styles.image} />
                            </a>
                        </div>
                    </div>

                    <img src="./astronaut.png" alt="astronaut" className='w-[30vw]' />
                </div>

                <div className='border border-gray-300 rounded-lg shadow-lg ml-10'>
                    <img src="/blue_background.png" alt="card" className="rounded-t-lg h-40 w-full" />

                    <div className={styles.contactText}>
                        <div className={styles.form}>
                            <h3>name:</h3>
                            <form action="tbd" id="nameForm">
                                <input name="name" id="name" placeholder="name" className={styles.formBox} />
                            </form>
                        </div>

                        <div className={styles.form}>
                            <h3>email:</h3>
                            <form action="tbd" id="emailForm">
                                <input type="email" name="email" id="email" placeholder="user@gmail.com" className={styles.formBox} />
                            </form>
                        </div>

                        <div className={styles.form}>
                            <h3>message:</h3>
                            <form action="tbd" id="messageForm">
                                <textarea placeholder="message" className={styles.textBox}></textarea>
                            </form>
                        </div>
                    </div>

                    <img src="/send_button.png" alt="send_button" style={{ width: "80px", marginLeft: "20px" }} />
                </div>
            </div>
        </section>
    );
}

export default Contact;
