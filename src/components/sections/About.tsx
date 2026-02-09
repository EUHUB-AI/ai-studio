import styles from '../../../public/assets/css/sections/About.module.css';

export default function About({ dict }: { dict: any }) {
    return (
        <section className={`${styles.section} section-padding`}>
            <div className="container">
                <div className={`${styles.card} glass`}>
                    <a
                        href="https://mike.euhub-ai.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        <div className={styles.content}>
                            <h2 className={styles.title}>{dict.title}</h2>
                            <h3 className={styles.role}>{dict.role}</h3>
                            <p className={styles.desc}>{dict.desc}</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
