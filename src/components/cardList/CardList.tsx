import Image from "next/image";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";
import Card from "../card/Card";

const CardList: React.FC = () => {
    return <div className={styles.container}>
        <h2 className={styles.title}>Posts Recientes</h2>
        <div className={styles.posts}>
            <Card />
        </div>
        <Pagination />
    </div>
}

export default CardList;