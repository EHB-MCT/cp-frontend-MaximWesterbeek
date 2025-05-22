import styles from '~styles/app.module.scss';

export const Loader = () => {
    return (
        <div className={styles['loading']}>
            <div className={styles['loading__gif']} />
            <h2 className={styles['loading__title']}>Loading...</h2>
        </div>
    );
}
