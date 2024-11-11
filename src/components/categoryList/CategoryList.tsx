import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";

const CategoryList: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Categorías Populares</h1>
            <div className={styles.categories}>
                <Link href="blog?cat=style" className={`${styles.category} ${styles.football}`}>
                    <Image
                        src="/style.png"
                        alt=""
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    fuchibol
                </Link>
                <Link href="blog?cat=style" className={`${styles.category} ${styles.history}`}>
                    <Image
                        src="/fashion.png"
                        alt=""
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    historia
                </Link>
                <Link href="blog?cat=style" className={`${styles.category} ${styles.politics}`}>
                    <Image
                        src="/food.png"
                        alt=""
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    política
                </Link>
                <Link href="blog?cat=style" className={`${styles.category} ${styles.economics}`}>
                    <Image
                        src="/travel.png"
                        alt=""
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    economía
                </Link>
                <Link href="blog?cat=style" className={`${styles.category} ${styles.anything}`}>
                    <Image
                        src="/culture.png"
                        alt=""
                        width={32}
                        height={32}
                        className={styles.image}
                    />
                    cosas
                </Link>
                <Link href="blog?cat=style" className={`${styles.category} ${styles.coding}`}>
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