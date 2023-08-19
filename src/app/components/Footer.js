import Image from 'next/image';
import styles from '../../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
   
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                  <p>Built in Milan by&nbsp; 
                     <Link href="https://www.layoverinitaly.com/" target="_blank" rel="noopener noreferrer" className={styles.Twitterlink}>Steph</Link>
                  </p>
                </div>
             </div>
        </footer>
    )
};

