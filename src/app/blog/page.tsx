import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";

interface SearchParams {
  page: string;
  category: string;
}

interface BlogPageProps {
  searchParams: Promise<SearchParams>;
}

const BlogPage: React.FC<BlogPageProps> = async (props: BlogPageProps) => {
  const searchParams = await props.searchParams;

  const { page, category } = searchParams;

  const pageNumber = parseInt(page || "1", 10);
  const pageCategory = category || "";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog de {category}</h1>
      <div className={styles.content}>
        <CardList page={pageNumber} category={pageCategory || ""} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
