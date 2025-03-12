import styles from "./categoryList.module.css";
import Category from "../category/Category";
import { getData } from "@/utils/data";

export interface CategoryItem {
  id: string;
  slug: string;
  title: string;
  img: string;
}

const CategoryList: React.FC = async () => {
  const data = await getData("categories");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categorías Populares</h1>
      <div className={styles.categories}>
        {data?.map((category: CategoryItem) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
