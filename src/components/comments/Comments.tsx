import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Comments</h3>
      {status === "authenticated" ? (
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
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpg"
              alt="imagen usuario"
              className={styles.image}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Juan Pérez</span>
              <span className={styles.date}>01.10.24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
