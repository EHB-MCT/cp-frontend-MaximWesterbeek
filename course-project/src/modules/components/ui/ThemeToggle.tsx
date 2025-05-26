import styles from '~styles/app.module.scss';
import React, { useContext } from 'react';
import { ThemeContext } from '~/shared/services/ThemeContextHandler';

export const ThemeToggle: React.FC = () => {
    // Environment variable to get base path. Needed for deployment
    const asset = (filename: string) => `${import.meta.env.BASE_URL}assets/${filename}`;

    // useContext to get theme and setTheme function from ThemeContextHandler
    const { theme, setTheme } = useContext(ThemeContext);

    if (!setTheme) return null;

    return (
        <button onClick={() => setTheme((prev) => !prev)} className={styles['theme-toggle']}>
            {theme ? (
                <img
                    src={asset("icon_theme-light-black.svg")}
                    alt="sun"
                    className={`${styles['theme-toggle__theme-icon']} ${styles['theme-toggle__theme-icon--black']}`} />
            ) : (
                <img
                    src={asset("icon_theme-dark-black.svg")}
                    alt="moon"
                    className={`${styles['theme-toggle__theme-icon']} ${styles['theme-toggle__theme-icon--black']}`} />
            )}
        </button>
    );
};
