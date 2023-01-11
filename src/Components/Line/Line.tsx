import { FC } from 'react';
import styles from './Line.module.css';
interface Props {
    semiCircleFlex: string;
    title: string;
    titleStyle: string;
}
const Line: FC<Props> = ({semiCircleFlex, title, titleStyle}) => {
    return(
        <div className={styles.title}>
            <h1 className={titleStyle}>{title}</h1>
            <div className={semiCircleFlex}>
                <div className={styles.semiCircle}></div>
                <div className={styles.semiCircle}></div>
                <div className={styles.semiCircle}></div>
                <div className={styles.semiCircle}></div>
                <div className={styles.semiCircle}></div>
                <div className={styles.semiCircle}></div>
                <div className={styles.semiCircle}></div>
                <div className={styles.semiCircle}></div>
                <div className={styles.semiCircle}></div>
                <div className={styles.semiCircle}></div>
                <div className={styles.semiCircle}></div>
            </div>
        </div>

    )
};

export default Line;