import styles from './menuTitles.module.css';

interface MenuTitlesProps {
    title: string;
    subtitle: string;
}

const MenuTitles: React.FC<MenuTitlesProps> = ({ title, subtitle }) => {
    return (
        <>
            <h3 className={styles.subtitle}>{title}</h3>
            <h2 className={styles.title}>{subtitle}</h2>
        </>
    );
}

export default MenuTitles;