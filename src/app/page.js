import Image from 'next/image';
import styles from '../styles/HeroSection.module.css';
import HeroSection from './components/HeroSection';
import Quiz from './components/Quiz';
import Nav from './components/Navbar';
import FAQ from './components/Faq';
import About from './components/About';
import Footer from './components/Footer';


export default function Home() {
  return (
    <main>
      <Nav />
      <HeroSection />
      <section className={styles.postHero}>
        <h2>What Are The Benefits Of Italian Citizenship?</h2>
        <p>Acquiring Italian citizenship provides unrestricted access to live, work, and study in Italy and the greater EU. You&apos;ll no longer need to worry about securing a work visa or a Golden Visa—as an Italian citizen, you can live in Italy for as long as you&apos;d like! 
          <br></br> <br></br>In addition to deepening your connection to your ancestral roots, Italian citizenship can be passed down to future generations, securing a lasting bond to this beautiful country and culture.</p>
      </section>
      <Quiz />
      <FAQ />
      <About />
      <Footer />
    </main>
  )
}
