import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";

interface Category {
  id: string;
  slug: string;
  title: string;
  img: string;
}

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed at getting data");
  }

  return res.json();
};

const CategoryList: React.FC = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categorías Populares</h1>
      <div className={styles.categories}>
        {data?.map((category: Category) => (
          <Link
            href="blog?cat=style"
            className={`${styles.category} ${styles[category?.title]}`}
          >
            {category.img && <Image
              src={category.img}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />}
            {category.slug}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
