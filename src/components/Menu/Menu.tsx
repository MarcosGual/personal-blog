import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
import MenuTitles from "../menuTitles/MenuTitles";

const Menu: React.FC = () => {
    return (
        <div className={styles.container}>
            <MenuTitles title="lo más 🔥" subtitle="Popular" />
            <MenuPosts withImage={false} />
            <MenuTitles title="descubrí por temas 📖" subtitle="Categorías" />
            <MenuCategories />
            <MenuTitles title="elecciones del 🔎" subtitle="Editor" />
            <MenuPosts withImage={true} />
        </div>
    );
}

export default Menu;