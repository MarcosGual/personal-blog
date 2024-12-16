"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { getData } from "@/utils/data";
import { dateTimeToDate } from "@/utils/functions";
import { useState } from "react";

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
  const [content, setContent] = useState<string>("");
  const status = useSession();

  const { data, mutate, isLoading } = useSWR(
    `comments?postSlug=${postSlug}`,
    getData
  );

  // console.log(data)

  const handleSubmit = async () => {
    if (!content.trim()) {
      alert("El comentario no puede estar vacío.");
      return;
    }

    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ content, postSlug }),
    });

    mutate();
    setContent("");
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Comments</h3>
      {status ? (
        <div className={styles.write}>
          <textarea
            name="comment"
            id="comment"
            value={content}
            placeholder="escribí un comentario..."
            className={styles.input}
            // content={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button className={styles.button} onClick={handleSubmit}>
            Enviar
          </button>
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
