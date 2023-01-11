import styles from './Header.module.css';
import Line from '../Line';
const Header = () => {
    return(
        <div className={styles.headerContent}>
            <div className={styles.logo}></div>
            <Line title="The best chef" titleStyle={styles.titleStyle} semiCircleFlex={styles.semiCircleFlex}></Line>
        </div>
    )
};

export default Header;