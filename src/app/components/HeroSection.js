import styles from '../../styles/HeroSection.module.css';
import Image from 'next/image';
import heroImg from '/public/toscana.png';


export default function HeroSection() {
    return (
    <section className={styles.container}>
        <div className={styles.heroCont}>
          <h1 className={styles.h1}>Are You Eligible For Italian Citizenship By Descent?</h1>
          <a href="#quiz" className={styles.primaryCTA}>Take the quiz today</a>
        </div>
          <Image 
            priority
            width={500}
            alt='Collage of the Florence duomo cathedral and a venice canal'
            src={heroImg}
            className={styles.heroImg}
        />
    </section>
  );
} 