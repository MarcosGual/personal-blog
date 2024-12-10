import Link from "next/link";
import styles from "./category.module.css";
import Image from "next/image";

interface CategoryProps {
  category: { id: string; slug: string; title: string; img: string };
}

const Category: React.FC<CategoryProps> = ({ category }: CategoryProps) => {
  return (
    <Link
      href={`blog?category=${category.slug}`}
      className={`${styles.category} ${styles[category?.title]}`}
    >
      {category.img && (
        <Image
          src={category.img}
          alt=""
          width={32}
          height={32}
          className={styles.image}
        />
      )}
      {category.slug}
    </Link>
  );
};

export default Category;
