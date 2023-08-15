import styles from '../../styles/About.module.css';
import Image from 'next/image'
import me from '/public/me.png';
import vlog from '/public/vlog.png'; 


export default function About() {
    return(
        <section className={styles.aboutCont} id={"about"}>
            <h2>About</h2>
            <div className={styles.mainCont}>
                <div className={styles.imgCont}>
                <Image 
                    width={400}
                    alt='Circular images of Portofino, Toscana, and Venezia.'
                    src={me}
                    className={styles.myImg}
                />
                <Image 
                        width={400}
                        alt='Find me on TikTok @stephanie_in_milan, where I vlog about living in Italy!'
                        src={vlog}
                        className={styles.myVlog}
                /></div>
                <p><span>Hi! My name is Stephanie, and I successfully applied for Italian citizenship by descent in 2019.</span> I currently work in Milan as a web developer, and I built this site to help other people with Italian ancestry determine if they are eligible.

<br /><br />If you’re interested in English-speaking jobs in Italy, check out my other website, <a href="https://startupjobsitalia.com/" target="_blank" rel="noreferrer">startupjobsitalia.com!</a>



                </p>
            </div>

        </section>
    )
};