import styles from '../../styles/Quiz.module.css';
import Image from 'next/image';
import star from '/public/star.svg'


export default function Quiz() {
    return(
    <section className={styles.quizCont}>
        <Image 
            width={100}
            alt='A blue star'
            src={star}
            className={styles.starImg}
        />
        <h2>Jure Sanguinis Italian  Citizenship Quiz</h2>
        <p>Curious if you can get Italian citizenship through your grandmother, great-grandparents, or another ancestor? Take this quiz to find out!</p>
        <button className={styles.primaryCTA}>Take the quiz</button>

    </section>
    )
};