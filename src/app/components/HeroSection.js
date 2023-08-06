import styles from '../../styles/HeroSection.module.css';
import Link from 'next/link';
import Image from 'next/image';
import heroImg from '/public/hero.png';


export default function HeroSection() {
    return (
    <section className={styles.container}>
        <div className={styles.heroCont}>
          <h1 className={styles.h1}>Are You Eligible For Italian Citizenship By Descent?</h1>
          <Link href="#" className={styles.primaryCTA}>Take the quiz today</Link>
        </div>
          <Image 
            priority
            width={550}
            alt='Circular images of Portofino, Toscana, and Venezia.'
            src={heroImg}
            className={styles.heroImg}
        />
    </section>
  );
}