import styles from '~styles/app.module.scss';

export const NoResults = () => {
    return (
        <div className={styles['no-results']}>
            <div className={styles['no-results__gif']}></div>
            <h2 className={styles['no-results__title']}>Oeps! Geen sprookjes gevonden die bij je zoekopdracht passen.</h2>
        </div>
    );
}
