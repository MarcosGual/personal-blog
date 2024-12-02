import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Category from "../category/Category";

export interface CategoryItem {
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
        {data?.map((category: CategoryItem) => (
          <Category category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
