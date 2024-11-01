import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";

const CardList: React.FC = () => {
    return <div className={styles.container}>
        Lista de Cards
        <Pagination />
    </div>
}

export default CardList;