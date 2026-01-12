import styles from '../../../public/assets/css/sections/CTA.module.css';

export default function CTA({ dict }: { dict: any }) {
    return (
        <section className={`${styles.section} section-padding`}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>{dict.title}</h2>
                    <button className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 2.5rem' }}>
                        {dict.button}
                    </button>
                </div>
            </div>
        </section>
    );
}
