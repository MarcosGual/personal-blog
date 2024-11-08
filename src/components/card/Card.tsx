import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" className={styles.image} fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span>11.02.2024</span>
                    <span className={styles.category}>Cultura en Argentina</span>
                </div>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat ad dicta sunt inventore voluptas!
                    Eius non repellat quibusdam rerum atque sunt reiciendis.
                    Neque exercitationem placeat omnis dignissimos eum voluptatum quo.
                </p>
                <Link href="/">Leer más</Link>
            </div>
        </div>
    )
}

export default Card;