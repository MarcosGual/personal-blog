import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";

const SinglePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Juan Perez</span>
              <span className={styles.date}>10.11.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="ejemplo" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <h5>Lorem ipsum dolor sit amet.</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              praesentium, repellendus quam sunt dolores quidem natus delectus
              exercitationem quo in sapiente consectetur excepturi debitis hic
              cumque, sed nulla fugit. Maxime.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              nemo voluptatum sint amet culpa id. Nesciunt asperiores hic
              dolorem nemo, culpa inventore debitis ipsum optio officiis saepe
              doloribus ipsa modi itaque, totam odio sequi, quibusdam facilis.
              Debitis quisquam similique labore.
            </p>
            <h5>Lorem ipsum dolor sit.</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              magni nesciunt magnam inventore sit dolorum commodi voluptatem
              eligendi sed totam, id obcaecati distinctio vel velit neque
              consequatur voluptatibus similique doloribus odit officiis
              incidunt beatae et. Autem, repudiandae saepe facere cumque dolor
              numquam blanditiis odit excepturi qui optio quod deleniti rerum!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              iure cumque ullam recusandae iusto ea rerum, cum, officiis
              quibusdam dolor adipisci sint voluptatem velit ab exercitationem
              debitis nesciunt fuga autem tempore. Nisi omnis vitae, eum
              necessitatibus, sapiente dolorem repellendus sit animi dignissimos
              enim, quas odio.
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
