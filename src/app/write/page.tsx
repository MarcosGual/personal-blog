"use client";
import Image from "next/image";
import styles from "./write.module.css";
import { useState } from "react";

const WritePage: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <input type="text" placeholder="título" />
      <div className={styles.editor}>
        <button className={styles.button}>
          <Image src="/plus.png" alt="agregar post" width={16} height={16} />
        </button>
      </div>
      {open && (
        <div className={styles.add}>
          <button className={styles.addButton}>
            <Image src="/image.png" alt="agregar post" width={16} height={16} />
          </button>
          <button className={styles.addButton}>
            <Image src="/external.png" alt="agregar post" width={16} height={16} />
          </button>
          <button className={styles.addButton}>
            <Image src="/video.png" alt="agregar post" width={16} height={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default WritePage;
