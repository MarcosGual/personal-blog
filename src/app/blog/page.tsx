import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";

interface BlogPageProps {
  searchParams: {
    page: string;
    category: string;
  };
}

const BlogPage: React.FC<BlogPageProps> = ({ searchParams }: BlogPageProps) => {
  if (!searchParams) return <div>Cargando...</div>;
  
  const page = parseInt(searchParams.page || "1", 10);
  const category = searchParams.category || "";

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
