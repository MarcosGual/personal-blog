"use client";

import { useRouter } from "next/navigation";
import styles from "./pagination.module.css";

interface PaginationProps {
  page: number;
}

const Pagination: React.FC<PaginationProps> = ({ page }: PaginationProps) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={()=>router.push(`?page=${page-1}`)}>Anterior</button>
      <button className={styles.button} onClick={()=>router.push(`?page=${page+1}`)}>Siguiente</button>
    </div>
  );
};

export default Pagination;
