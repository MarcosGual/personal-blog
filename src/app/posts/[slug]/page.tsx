import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import { getData } from "@/utils/data";
import { Params } from "@/app/api/posts/[slug]/route";
import { dateTimeToDate } from "@/utils/functions";

const SinglePage: React.FC<Params> = async ({ params }: Params) => {
  const searchParams = await params;

  let { post } = await getData(`/posts/${searchParams.slug}`);
  // console.log(post);

  if (!post || post === "undefined") {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.user}>
            {post?.author.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={post.author.image}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post?.author.name}</span>
              <span className={styles.date}>
                {dateTimeToDate(post.createdAt)}
              </span>
            </div>
          </div>
        </div>
        {post.img && (
          <div className={styles.imageContainer}>
            <Image
              src={post.img || "/p1.jpeg"}
              alt="imagen del posteo"
              fill
              className={styles.image}
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post?.desc }}
          />
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post?.body }}
          />
          <div className={styles.comment}>
            <Comments postSlug={searchParams.slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
