import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import { PostData } from "../cardList/CardList";
import { dateTimeToDate } from "@/utils/functions";

interface CardProps {
  post: PostData;
}

const Card: React.FC<CardProps> = ({ post }: CardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {/* poner la imagen de categorías de posteo */}
        <Image src="/p1.jpeg" alt="" className={styles.image} fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span>{dateTimeToDate(post.createdAt)}</span>
          <span className={styles.category}>{post.catSlug}</span>
        </div>
        <Link href="/">
          <h2 className="">{post.title}</h2>
        </Link>
        <p className={styles.description}>
          {post.desc}
        </p>
        <Link href="/" className={styles.link}>
          Leer más
        </Link>
      </div>
    </div>
  );
};

export default Card;
