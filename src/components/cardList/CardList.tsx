import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import { getData } from "@/utils/data";

interface PostData {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  desc: string;
  body: string;
  img: string;
}

const CardList: React.FC = async () => {
  const posts = await getData("posts");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Posts Recientes</h2>
      <div className={styles.posts}>
        {posts.map((post: PostData) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
