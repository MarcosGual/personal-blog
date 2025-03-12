import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import { getPagesByCatData } from "@/utils/data";

export interface PostData {
  id: string;
  title: string;
  slug: string;
  catSlug: string;
  createdAt: string;
  desc: string;
  body: string;
  img: string;
}

interface CardListProps {
  page: number;
  category?: string;
}

const CardList: React.FC<CardListProps> = async ({
  page,
  category,
}: CardListProps) => {
  const { posts, count } = await getPagesByCatData(page, category as string);

  const POST_PER_PAGE = 3;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Posts Recientes</h2>
      {posts.length > 0 ? (
        <div className={styles.posts}>
          {posts.map((post: PostData) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <h4>No hay posteos para mostrar...</h4>
      )}
      {posts.length > 0 && (
        <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
      )}
    </div>
  );
};

export default CardList;
