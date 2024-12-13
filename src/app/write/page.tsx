"use client";
import Image from "next/image";
import styles from "./writePage.module.css";
import { ChangeEvent, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.bubble.css";

const WritePage: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [file, setFile] = useState<any>(null);

  return (
    <div className={styles.container}>
      <input type="text" placeholder="título" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="agregar post" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (!e.target.files) return;
                setFile(e.target?.files[0] || null);
              }}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image
                  src="/image.png"
                  alt="agregar imagen"
                  width={16}
                  height={16}
                />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image
                src="/external.png"
                alt="agregar link"
                width={16}
                height={16}
              />
            </button>
            <button className={styles.addButton}>
              <Image
                src="/video.png"
                alt="agregar video"
                width={16}
                height={16}
              />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="escribí tu historia..."
        />
      </div>
      <button className={styles.publish}>Publicar</button>
    </div>
  );
};

export default WritePage;
