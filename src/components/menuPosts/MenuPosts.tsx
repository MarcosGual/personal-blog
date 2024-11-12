import Link from 'next/link';
import styles from './menuPosts.module.css';
import Image from 'next/image';

interface MenuPostsProps {
    withImage: boolean;
}

const MenuPosts: React.FC<MenuPostsProps> = ({ withImage }) => {
    return (<div className={styles.items}>
        <Link href="/" className={styles.item}>
            {withImage && <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt="" fill className={styles.image} />
            </div>}
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.economics}`}>
                    Economía
                </span>
                <h3>
                    Lorem ipsum dolor sit amet consectetur.
                </h3>
                <div className={styles.detail}>
                    <span className={styles.username}>Juan Perez - </span>
                    <span className={styles.date}>10.11.2024</span>
                </div>
            </div>
        </Link>
        <Link href='/' className={styles.item}>
            {withImage && <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt="" fill className={styles.image} />
            </div>}
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.history}`}>
                    Historia
                </span>
                <h3>
                    Lorem ipsum dolor sit amet consectetur.
                </h3>
                <div className={styles.detail}>
                    <span className={styles.username}>Juan Perez - </span>
                    <span className={styles.date}>23.07.2024</span>
                </div>
            </div>
        </Link>
        <Link href='/' className={styles.item}>
            {withImage && <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt="" fill className={styles.image} />
            </div>}
            <div className={styles.textContainer}>
                <span className={`${styles.category} ${styles.coding}`}>
                    Programación
                </span>
                <h3>
                    Lorem ipsum dolor sit amet consectetur.
                </h3>
                <div className={styles.detail}>
                    <span className={styles.username}>Juan Perez - </span>
                    <span className={styles.date}>28.04.2024</span>
                </div>
            </div>
        </Link>
    </div>
    );
}

export default MenuPosts;