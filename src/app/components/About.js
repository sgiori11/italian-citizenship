import styles from '../../styles/About.module.css';
import Image from 'next/image'
import me from '/public/me.png';


export default function About() {
    return(
        <section className={styles.aboutCont}>
            <h2>About</h2>
            <Image 
                width={400}
                alt='Circular images of Portofino, Toscana, and Venezia.'
                src={me}
                className={styles.myImg}
        />

        </section>
    )
};