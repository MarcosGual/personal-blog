"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { getData } from "@/utils/data";
import { dateTimeToDate } from "@/utils/functions";

interface CommentsProps {
  postSlug: string;
}

interface Comment {
  id: string;
  createdAt: string;
  userEmail: string;
  postSlug: string;
  content: string;
  user: {
    name: string;
    image: string;
  };
}

const Comments: React.FC<CommentsProps> = ({ postSlug }: CommentsProps) => {
  const status = useSession();

  const { data, isLoading } = useSWR(`comments?postSlug=${postSlug}`, getData);

  // console.log(data)

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Comments</h3>
      {status ? (
        <div className={styles.write}>
          <textarea
            name="comment"
            id="comment"
            placeholder="escribí un comentario..."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Enviar</button>
        </div>
      ) : (
        <Link href="/login">Ingresá para comentar.</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "Loading..."
          : data.comments.map((comment: Comment) => (
              <div className={styles.comment} key={comment.id}>
                <div className={styles.user}>
                  {comment.user.image && (
                    <Image
                      src={comment.user.image}
                      alt="imagen usuario"
                      className={styles.image}
                      width={50}
                      height={50}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{comment.user.name}</span>
                    <span className={styles.date}>
                      {dateTimeToDate(comment.createdAt)}
                    </span>
                  </div>
                </div>
                <p className={styles.desc}>{comment.content}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
