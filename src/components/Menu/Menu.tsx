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
                    <div className={styles.imageContainer}>
                        <Image src='/p1.jpeg' alt="" fill className={styles.image} />
                    </div>
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
                    <div className={styles.imageContainer}>
                        <Image src='/p1.jpeg' alt="" fill className={styles.image} />
                    </div>
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
            <h3 className={styles.subtitle}>{"descubrí por temas 📖"}</h3>
            <h2 className={styles.title}>Categorías</h2>
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
            <h3 className={styles.subtitle}>{"elegido por el 🔎"}</h3>
            <h2 className={styles.title}>Editor</h2>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src='/p1.jpeg' alt="" fill className={styles.image} />
                    </div>
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
                    <div className={styles.imageContainer}>
                        <Image src='/p1.jpeg' alt="" fill className={styles.image} />
                    </div>
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
                    <div className={styles.imageContainer}>
                        <Image src='/p1.jpeg' alt="" fill className={styles.image} />
                    </div>
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
        </div>
    );
}

export default Menu;