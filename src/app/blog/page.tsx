import CardList from '@/components/cardList/CardList';
import styles from './blogPage.module.css';
import Menu from '@/components/Menu/Menu';

const BlogPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Blog de Economía</h1>
            <div className={styles.content}>
                <CardList />
                <Menu />
            </div>
        </div>
    )
}

export default BlogPage;