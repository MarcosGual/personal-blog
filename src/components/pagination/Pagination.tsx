import styles from "./pagination.module.css";

const Pagination: React.FC = () => {
    return <div className={styles.container}>
        <button className={styles.button}>
            Anterior
        </button>
        <button className={styles.button}>
            Siguiente
        </button>
    </div>
}

export default Pagination;