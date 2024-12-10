"use client";

import { useRouter } from "next/navigation";
import styles from "./pagination.module.css";

interface PaginationProps {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  hasPrev,
  hasNext,
}: PaginationProps) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Reciente
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Anterior
      </button>
    </div>
  );
};

export default Pagination;
