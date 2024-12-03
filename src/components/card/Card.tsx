import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

interface CardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    desc: string;
    body: string;
    img: string;
  };
}

const Card: React.FC<CardProps> = ({ post }: CardProps) => {
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
        <Link href="/">
          <h2 className="">Lorem ipsum dolor sit amet.</h2>
        </Link>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ad
          dicta sunt inventore voluptas! Eius non repellat quibusdam rerum atque
          sunt reiciendis. Neque exercitationem placeat omnis dignissimos eum
          voluptatum quo.
        </p>
        <Link href="/" className={styles.link}>
          Leer más
        </Link>
      </div>
    </div>
  );
};

export default Card;
