import styles from "./page.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

interface HomeProps {
  searchParams: {
    page: string;
  };
}

export default function Home({ searchParams }: HomeProps) {

  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
