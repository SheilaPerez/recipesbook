import styles from './Menu.module.css';

const Menu = () => {
    return(
        <div>
            <div className={styles.menuContent}>
                <div className={styles.subMenuContent}>
                    <div className={styles.iconNewRecipes}></div>
                    <p>New recipe</p>
                </div>
                <div className={styles.subMenuContent}>
                    <div className={styles.iconYourRecipes}></div>
                    <p>Your recipes</p>
                </div>
                    <p className={styles.subMenu}>Meals</p>
                    <p className={styles.subMenu}>Deserts</p>
                    <p className={styles.subMenu}>Sweet</p>
            </div>
            <div className={styles.yellowBorder}></div>
        </div>
    )
};

export default Menu;