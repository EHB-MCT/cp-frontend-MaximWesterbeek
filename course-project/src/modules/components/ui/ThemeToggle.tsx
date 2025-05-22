import styles from '~styles/app.module.scss';
import React, { useContext } from 'react';
import { ThemeContext } from '~/shared/services/ThemeContextHandler';

export const ThemeToggle: React.FC = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    if (!setTheme) return null;

    return (
        <button onClick={() => setTheme((prev) => !prev)} className={styles['theme-toggle']}>
            {theme ? (
                <img
                    src="/assets/icon_theme-light-black.svg"
                    alt="sun"
                    className={`${styles['theme-toggle__theme-icon']} ${styles['theme-toggle__theme-icon--black']}`} />
            ) : (
                <img
                    src="/assets/icon_theme-dark-black.svg"
                    alt="moon"
                    className={`${styles['theme-toggle__theme-icon']} ${styles['theme-toggle__theme-icon--black']}`} />
            )}
        </button>
    );
};
