import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";

const CategoryList: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Categorías Populares</h1>
            <div className={styles.categories}>
                <Link href="blog?cat=style" className={`${styles.category} ${styles.style}`}>
                    <Image
                        src="/style.png"
                        alt=""
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    estilo
                </Link>
                <Link href="blog?cat=style" className={`${styles.category} ${styles.style}`}>
                    <Image
                        src="/fashion.png"
                        alt=""
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    moda
                </Link>
                <Link href="blog?cat=style" className={`${styles.category} ${styles.style}`}>
                    <Image
                        src="/food.png"
                        alt=""
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    comida
                </Link>
                <Link href="blog?cat=style" className={`${styles.category} ${styles.style}`}>
                    <Image
                        src="/travel.png"
                        alt=""
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    viajes
                </Link>
                <Link href="blog?cat=style" className={`${styles.category} ${styles.style}`}>
                    <Image
                        src="/coding.png"
                        alt=""
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    programación
                </Link>
            </div>
        </div>
    );
}

export default CategoryList;