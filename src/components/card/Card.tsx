import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import { PostData } from "../cardList/CardList";
import { dateTimeToDate } from "@/utils/functions";

interface CardProps {
  post: PostData;
}

const Card: React.FC<CardProps> = ({ post }: CardProps) => {
  const imageSrc = post.img ? post.img : "/" + post.catSlug + ".jpg";

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {/* poner la imagen de categorías de posteo */}
        <Image src={imageSrc} alt="" className={styles.image} fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span>{dateTimeToDate(post.createdAt)}</span>
          <span className={styles.category}>{post.catSlug}</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h2 className="">{post.title}</h2>
        </Link>
        <p className={styles.description}>{post.desc}</p>
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Leer más...
        </Link>
      </div>
    </div>
  );
};

export default Card;
