'use client'

import styles from '../../styles/Quiz.module.css';
import Image from 'next/image';
import star from '/public/star.svg';
import React, { useState } from 'react';

export default function QuizContainer() {
    return (
        <section className={styles.quizCont} id={'quiz'}>
            <Image 
                width={100}
                alt='A blue star'
                src={star}
                className={styles.starImg}
            />
            <h2>Jure Sanguinis Italian Citizenship Quiz</h2>
            <Quiz />
        </section>
    );
}

function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [result, setResult] = useState('');
  const [resources, setResources] = useState([]);

  const handleAnswer = (nextQuestion, qualify) => {
    setQuestionNumber(nextQuestion);

    if (qualify) {
      setResult('');
    }
  };

  if (result) {
    return (
      <div className={styles.quiz}>
        <p className={styles.testResult}>{result}</p>
      
          {resources.length > 0 && (
            <ul className={styles.resources}>
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.link}>{resource.label}</a>
                  <br></br>
                  <br></br>
                </li>
              ))}
            </ul>
          )}
        <button className={styles.primaryCTA + ' ' + styles.retakeQuiz} 
        onClick={() => {
          handleAnswer(1, true);
          setResources([]);
          }}>Retake quiz</button>
      </div>
   )
  };

  switch (questionNumber) {
    case 0:
      return (
        <div className={styles.welcomeScreen}>
          <p>Curious if you can get Italian citizenship through your grandmother, great-grandparents, or another ancestor? Take this quiz to find out!</p>
          <button className={styles.primaryCTA} onClick={() => handleAnswer(1, true)}>Take the quiz</button>
          <p> Note: The information provided on this website does not, and is not intended to, constitute legal advice.</p>
        </div>
      );
    case 1:
      return (
        <div className={styles.quiz}>
          <p>Was at least one of your direct ascendants (parents, grandparents, great-grandparents, etc.) born in Italy?</p>
          <span></span>
          <button onClick={() => handleAnswer(2, true)}>Yes</button>
          <button onClick={() => setResult(
            <>
            You don&apos;t appear to qualify for Italian citizenship by descent.
            </>
            )}>No</button>
        </div>
      );
    case 2:
      return (
        <div className={styles.quiz}>
          <p>Did your Italian-born ancestor naturalize as a citizen of a foreign country, or die, before March 17, 1861?</p>
          <span></span>
          <button onClick={() => setResult('Since Italy was not a unified country before this date, you do not qualify for Italian citizenship by descent through this line.')}>Yes</button>
          <button onClick={() => handleAnswer(3, true)}>No</button>
        </div>
      );
    case 3:
      return (
        <div className={styles.quiz}>
          <p>Do you have any women in your direct line of Italian ascendants?</p>
          <span>Example: You’re applying through your Italian-born grandfather who moved to the US and then had your mother. Therefore, your line has a female ascendant.</span>
          <button onClick={() => handleAnswer(5, true)}>Yes</button>
          <button onClick={() => handleAnswer(6, true)}>No</button>
        </div>
      );
    case 5:
      return (
        <div className={styles.quiz}>
          <p>Did your female ascendant give birth to the next person in your line after January 1st, 1948?</p>
          <span>Example: Your Italian great-grandfather had your grandmother in 1930. Your grandmother gave birth to your father in 1960. Since your father was born after 1948, your grandmother was able to pass on her Italian citizenship.
          <br></br>
          <br></br>Prior to January 1st, 1948, Italian law did not allow women to transfer Italian citizenship to their children. </span>
          <button onClick={() => handleAnswer(6, true)}>Yes</button>
          <button onClick={() => {
            setResult(
              <>
              In order to claim Italian citizenship through this female ancestor, you&apos;ll have to file a judicial case in the regional county where your Italian ancestor was born.
              </>
              )
            setResources([
              { label: 'Read more about 1948 cases.', link: 'https://dualusitalian.com/welcome/units/laws-1948-the-italian-republic-and-womens-rights-to-pass-citizenship/' },
            ]);
         }}>No</button>
        </div>
      );
    case 6:
      return (
        <div className={styles.quiz}>
          <p>Did your Italian-born ancestor acquire a foreign citizenship before August 16, 1992?</p>
          <span>After August 16th, 1992, Italy began recognizing dual citizenship. Italians who naturalized in a foreign country after this date no longer lost their Italian citizenship. </span>
          <button onClick={() => handleAnswer(7, true)}>Yes</button>
          <button onClick={() => handleAnswer(11, true)}>No</button>
        </div>
      );
    case 7:
      return (
        <div className={styles.quiz}>
          <p>Did the acquisition of foreign citizenship occur after June 14th, 1912 AND after the next person in your lineage was born (ex. after the birth of your parent or grandparent)?</p>
          <span>Use the date listed on your Italian ancestor&apos;s official naturalization certificate to answer this question. The date that matters to Italy is the date that your ancestor naturalized, not the date that they started the process. </span>
          <button onClick={() => handleAnswer(8, true)}>Yes</button>
          <button onClick={() => {
            setResult(
              <>
              If the date listed on your Italian ancestor&apos;s naturalization certificate precedes June 14th, 1912 OR precedes the birthdate of your next ascendant, you likely do not qualify for Italian citizenship by descent.
              </>
              )
            setResources([
              { label: 'Learn more the eligibility requirements.', link: 'https://dualusitalian.com/welcome/units/overview-of-jure-sanguinis/' },
            ]);
          }}>No</button>
        </div>
      );
    case 8:
      return (
        <div className={styles.quiz}>
          <p>Did your Italian-born ancestor acquire a foreign citizenship while the next person in your line of ascendants was a minor?</p>
          <span>Note: Before August 10, 1975, Italy considered anyone under age 21 to be a minor. After this date, the age was lowered to 18.</span>
          <button onClick={() => handleAnswer(9, true)}>Yes</button>
          <button onClick={() => handleAnswer(11, true)}>No</button>
        </div>
      );
    case 9:
      return (
        <div className={styles.quiz}>
          <p>Was the minor child born in a country that defines citizenship by jure soli (such as the United States, Canada, Argentina, etc.)?</p>
          <span>Jure Soli is commonly referred to as “birthright citizenship”. Anyone born “on the soil” of a country that practices Jure Soli is automatically granted citizenship of that country.</span>
          <button onClick={() => handleAnswer(11, true)}>Yes</button>
          <button onClick={() => handleAnswer(10, true)}>No</button>
        </div>
      );
    case 10:
      return (
        <div className={styles.quiz}>
          <p>Was the minor child with the parent outside of Italy at the time the parent naturalized as a citizen of the foreign country, and did that child acquire the foreign citizenship with the parent?</p>
          <button onClick={() => {
            setResult(
              <>
              By naturalizing as a citizen of a foreign country before Italy&apos;s recognition of dual citizenship in 1992, your ancestor lost their Italian citizenship. However, depending on your unique case, it might still be possible to reclaim Italian citizenship.
              </>
              )
            setResources([
              { label: 'Learn more the eligibility requirements.', link: 'https://dualusitalian.com/welcome/units/overview-of-jure-sanguinis/' },
            ]);
            }}>Yes</button>
          <button onClick={() => handleAnswer(11, true)}>No</button>
        </div>
      );
      case 11:
        return (
          <div className={styles.quiz}>
            <p>To your knowledge, have you or any of your direct ascendants ever formally renounced your right to Italian citizenship?</p>
            <span>Note: Formal renunciation of Italian citizenship is rare and occurs in the presence of Italian authorities. For most applicants, the answer to this question is “No”.</span>
            <button onClick={() => {
              setResult(' If this renunciation occurred before the birthdate of the next person in your lineage, you might not qualify for Italian citizenship by descent. However, depending on your unique case, you might still be eligible.')
              setResources([
                { label: 'Read more about the eligibility requirements.', link: 'https://dualusitalian.com/welcome/units/overview-of-jure-sanguinis/' },
              ]);
              }}>Yes</button>
            <button onClick={() => {
              setResult('Congratulations! You likely qualify for Italian citizenship by descent. Here are some resources to guide your journey:')
              setResources([
                { label: 'Join the Dual U.S.-Italian Citizenship FB group (all nationalities welcome)', link: 'https://www.facebook.com/groups/dualusitaliancitizenship/' },
                { label: 'Join the /juresanguinis subreddit', link: 'https://www.reddit.com/r/juresanguinis/' },
                { label: 'Read more about the Jure Sanguinis process', link: 'https://dualusitalian.com/' },
              ]);
            }}>No</button>
          </div>
        );
    default:
      return null;
  }
};
