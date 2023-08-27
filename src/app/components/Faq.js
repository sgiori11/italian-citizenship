import styles from '../../styles/Faq.module.css';


export default function Faq() {

    const questionsData = [
        {
            id: "question1",
            label: "How much does it cost to get Italian citizenship by descent?",
            content: (
                <>
                    The cost of getting Italian citizenship by descent can vary greatly depending on your ancestral line, place of residence, and whether you apply in Italy or another country. An applicant with an “easy” line (one that does not require a lawyer for a 1948 case) might expect to spend anywhere from $200 to $2000 USD in total for documents, translations, apostilles, fees, and various transportation costs.<br /><br />
                    If your case requires an Italian lawyer, the total cost might be higher.
                </>
            )
        },
        {
            id: "question2",
            label: "How long does it take to get Italian citizenship by descent?",
            content: (
                <>
                     If you&apos;re applying outside of Italy, the time it takes to get Italian citizenship by descent depends on your ancestral line and the location of your nearest Italian consulate. An applicant with a straightforward line, who lives in a district served by a “fast” consulate, might be recognized as a citizen in 1 to 3 years. <br /><br />The process can be expedited by applying directly in Italy.
                </>
            )
        },      
        {
            id: "question3",
            label: "Can I apply for Italian citizenship in Italy directly?",
            content: (
                <>
                    Yes! Applying for Italian citizenship by descent directly in Italy is the fastest way to be recognized and can take just a few months. For more details about this process, visit <a href="https://dualusitalian.com/applying-in-italy/" target="_blank" rel="noopener noreferrer">dualusitalian.com/applying-in-italy/</a>.
                </>
            )
        },
        {
            id: "question4",
            label: "Are there any disadvantages to getting dual Italian citizenship?",
            content: (
                <>
                    No, not for the vast majority of jure sanguinis applicants. Many countries are accepting of dual citizenship, and you will not be required to file taxes in Italy unless you move there and establish residency.<br /><br /> However, if you work in a sector that requires a high level of security clearance, you should verify that it&apos;s okay to pursue dual citizenship. 
                </>
            )
        },
        {
            id: "question5",
            label: "Can I apply for Italian citizenship through my great-grandparents?",
            content: (
                <>
                    Yes! There is no generational limit for claiming Italian citizenship by descent as long as your ancestral line meets the requirements.  
                </>
            )
        },
        {
            id: "question6",
            label: "How expensive is a 1948 case with an Italian lawyer?",
            content: (
                <>
                    Depending on your lineage, a 1948 case can cost between $3.5k-$8k. Other eligible family members in your line can join the case in order to split the costs. 
                </>
            )
        },
    ];
    
      
        return (
                <section className={styles.container} id={"faq"}>
                    <h2>FAQs</h2>
                    <section className={styles.FAQSection}>
                        <div className={styles.faqsCont}>
                            {questionsData.map(question => (
                                <div key={question.id} className={styles.faq}>
                                    <input 
                                        type="checkbox" 
                                        id={question.id} 
                                    />
                                    <label htmlFor={question.id}>
                                        <span className={styles.arrow}>
                                            {question.label}
                                            <svg 
                                                className={`${styles.svgArrow}`} 
                                                width="45" 
                                                height="80" 
                                                viewBox="0 0 45 80" 
                                                fill="none" 
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M5.49927 5.50073L39.5559 39.5574C39.6797 39.6811 39.6797 39.8818 39.5559 40.0055L5.49927 74.0622" stroke="#000000" strokeWidth="10" strokeLinecap="round" />
                                            </svg>
                                        </span>
                                        <p className={styles.hidden}>
                                            {question.content}
                                        </p>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
            );
        }


  

  
