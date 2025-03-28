import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <Link href="/" className={styles.logo}>
        <div>programación pragmática</div>
      </Link>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href="">
          Inicio
        </Link>
        <Link className={styles.link} href="">
          Contacto
        </Link>
        <Link className={styles.link} href="">
          Acerca de
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
