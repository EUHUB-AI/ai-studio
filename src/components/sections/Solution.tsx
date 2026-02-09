import styles from '../../../public/assets/css/sections/Solution.module.css';

export default function Solution({ dict }: { dict: any }) {
    return (
        <section className={`${styles.section} section-padding`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        {dict.title}
                    </h2>
                    <h3 className={styles.subtitle}>{dict.subtitle}</h3>
                    <p className={styles.description}>{dict.description}</p>
                </div>

                <div className={styles.steps}>
                    {dict.steps.map((step: any, index: number) => (
                        <div key={index} className={`${styles.step} glass`}>
                            <div className={styles.number}>0{index + 1}</div>
                            <h4 className={styles.stepTitle}>{step.title}</h4>
                            <p className={styles.stepDesc}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
