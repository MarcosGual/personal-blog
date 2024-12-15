"use client";
import styles from "./writePage.module.css";
import { ChangeEvent, useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { app } from "@/utils/firebase";
import { getStorage } from "@firebase/storage";
import { shortString, slugify, uploadFile } from "@/utils/functions";
import Image from "next/image";

const storage = getStorage(app);

const WritePage: React.FC = () => {
  const { status } = useSession();

  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [file, setFile] = useState<any>();
  const [media, setMedia] = useState<string | null>("");

  useEffect(() => {
    file && uploadFile(storage, file, setMedia);
  }, [file]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]); 

  if (status === "unauthenticated") return null;

  if (status === "loading")
    return <div className={styles.loading}>Cargando...</div>;

  const handleSubmit = async ()=>{
    const res = await fetch("api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: shortString(value, 120),
        body: value,
        img: media,
        slug: slugify(title),
      })
    })

    console.log(res);

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="título"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
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
      <button className={styles.publish} onClick={handleSubmit}>Publicar</button>
    </div>
  );
};

export default WritePage;
