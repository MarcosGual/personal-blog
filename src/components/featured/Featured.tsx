import Image from "next/image";
import styles from "./featured.module.css";

const Featured: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Programación Pragmática</b> (un blog con de todo).
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" className={styles.image} fill />
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h2>
                    <p className={styles.postPreview}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae perspiciatis quam est quod debitis nam dicta praesentium
                        sit ea quisquam asperiores harum in quia amet itaque,
                        quidem quaerat at repudiandae.
                    </p>
                    <button className={styles.button}>Leer más...</button>
                </div>
            </div>
        </div>
    );
}

export default Featured;