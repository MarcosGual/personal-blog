"use client"
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";

const AuthLinks = () => {
    const [open, setOpen] = useState<boolean>(false);

    const status = "noautenticado";

    return <>
        {/* {status === "noautenticado" ?
            (<Link href="/login">Login</Link>) : (
                <>
                    <Link href="/write">Write</Link>
                    <span className={styles.link}>Logout</span>
                </>
            )
        } */}
        <div className={styles.burger} onClick={() => setOpen(!open)}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
        {open && (
            <div className={styles.responsiveMenu}>
                <Link href="/">Inicio</Link>
                <Link href="/">Acerca de</Link>
                <Link href="/">Contacto</Link>
                {status === "noautenticado" ?
                    (<Link href="/login">Login</Link>) : (
                        <>
                            <Link href="/write">Write</Link>
                            <span className={styles.link}>Logout</span>
                        </>
                    )
                }
            </div>
        )}
    </>
}

export default AuthLinks;