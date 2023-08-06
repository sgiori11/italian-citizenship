import Image from 'next/image';
import styles from '../styles/HeroSection.module.css';
import HeroSection from './components/HeroSection';
import Quiz from './components/Quiz';
import FAQ from './components/Faq';
import About from './components/About';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className={styles.postHero}>
        <h2>What Are The Benefits Of Italian Citizenship?</h2>
        <p>Acquiring Italian citizenship provides unrestricted access to live, work, study, and retire in Italy. In addition to deepening your connection to your ancestral roots, Italian citizenship can be passed down to future generations, securing a lasting bond to this beautiful country and culture.</p>
      </section>
      <Quiz />
      <FAQ />
      <About />
    </main>
  )
}
