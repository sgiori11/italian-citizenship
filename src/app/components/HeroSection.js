import styles from '../../styles/HeroSection.module.css';
import Image from 'next/image';
import tuscany from '/public/toscanac.jpg';

export default function HeroSection() {
    return (
    <section className={styles.container}>
        <h1>Are You Eligible For Italian Citizenship By Descent?</h1>
         <Image 
                priority={true}
           
                src=""
                alt="A hand-drawn fern"
                width={350}
            />
    </section>
  );
}