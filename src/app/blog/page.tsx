import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";

interface BlogPageProps {
  searchParams: Promise<{
    page: any;
    category: string;
  }>;
}

const BlogPage: React.FC<BlogPageProps> = async (props: BlogPageProps) => {
  const searchParams = await props.searchParams;

  let { page, category } = searchParams;

  page = parseInt(page || "1", 10);
  category = category || "";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog de {category}</h1>
      <div className={styles.content}>
        <CardList page={page} category={category || ""} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
