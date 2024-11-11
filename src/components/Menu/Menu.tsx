import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";

const Menu: React.FC = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.subtitle}>{"lo más 🔥"}</h3>
            <h2 className={styles.title}>Popular</h2>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src='/p1.jpeg' alt="" fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Viajes
                        </span>
                        <h3>
                            Lorem ipsum dolor sit amet consectetur.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Juan Perez - </span>
                            <span className={styles.date}>10.03.2024</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Menu;