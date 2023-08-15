import link from 'next/link';
import image from 'next/image';
import styles from '../../styles/Nav.module.css';


export default function Nav() {
    return(
    <nav className={styles.navCont}>
        <a href="#about">About</a>
        <a href="#faq">FAQ</a>
        <a href="#quiz">Take the quiz</a>
    </nav>

    )
}