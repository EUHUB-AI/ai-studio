import Image from 'next/image';
import styles from '../../../public/assets/css/sections/Problem.module.css';

const icons = [
    '/icons/time-waste.png',
    '/icons/broken-workflow.jpg',
    '/icons/confusion.png',
    '/icons/stress.png'
];

export default function Problem({ dict }: { dict: any }) {
    return (
        <section className={`${styles.section} section-padding`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>{dict.title}</h2>
                    <p className={styles.description}>{dict.description}</p>
                </div>

                <div className={styles.grid}>
                    {dict.points.map((point: string, index: number) => {
                        const iconPath = icons[index] || icons[0];
                        return (
                            <div key={index} className={`${styles.card} glass`}>
                                <div className={styles.iconWrapper}>
                                    <Image
                                        src={iconPath}
                                        alt={point}
                                        width={100}
                                        height={100}
                                        className={styles.icon}
                                    />
                                </div>
                                <p>{point}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
