import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logoContainer}>
                    <Image src="/zorrito.png" width={60} height={60} alt="logo" className={styles.logo} />
                    <h3>programación pragmática blog</h3>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat nemo officiis laborum debitis nostrum dolores optio vel,
                    veniam qui assumenda accusantium impedit natus.
                    Laudantium consequuntur mollitia quaerat ipsum vitae eius.
                </p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt="" width={18} height={18} />
                    <Image src="/instagram.png" alt="" width={18} height={18} />
                    <Image src="/tiktok.png" alt="" width={18} height={18} />
                    <Image src="/youtube.png" alt="" width={18} height={18} />
                </div>
                <div className={styles.links}>
                    <div className={styles.list}>
                        <span className={styles.listTitle}>Enlaces</span>
                        <Link href="/">Inicio</Link>
                        <Link href="/">Blog</Link>
                        <Link href="/">Acerca de</Link>
                        <Link href="/">Contacto</Link>
                    </div>
                    <div className={styles.list}>
                        <span className={styles.listTitle}>Etiquetas</span>
                        <Link href="/">Economía</Link>
                        <Link href="/">Política</Link>
                        <Link href="/">Programación</Link>
                        <Link href="/">Fútbol</Link>
                        <Link href="/">Cosas</Link>
                    </div>
                    <div className={styles.list}>
                        <span className={styles.listTitle}>Social</span>
                        <Link href="/">Facebook</Link>
                        <Link href="/">Instagram</Link>
                        <Link href="/">TikTok</Link>
                        <Link href="/">Youtube</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;