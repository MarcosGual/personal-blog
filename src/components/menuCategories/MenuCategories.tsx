import Link from "next/link";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
    return (
        <div className={styles.categoryList}>
            <Link href='/blog?cat=economics' className={`${styles.categoryItem} ${styles.economics}`}>
                Economía
            </Link>
            <Link href='/blog?cat=politics' className={`${styles.categoryItem} ${styles.politics}`}>
                Política
            </Link>
            <Link href='/blog?cat=history' className={`${styles.categoryItem} ${styles.history}`}>
                Historia
            </Link>
            <Link href='/blog?cat=coding' className={`${styles.categoryItem} ${styles.coding}`}>
                Programación
            </Link>
            <Link href='/blog?cat=football' className={`${styles.categoryItem} ${styles.football}`}>
                Fuchibol
            </Link>
            <Link href='/blog?cat=anything' className={`${styles.categoryItem} ${styles.anything}`}>
                Cosas
            </Link>
        </div>
    );
}

export default MenuCategories;