import styles from '~styles/app.module.scss';
import React, { useContext } from 'react';
import { ThemeContext } from '~/shared/services/ThemeContextHandler';

export const ThemeToggle: React.FC = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    if (!setTheme) return null;

    console.log('ThemeToggle', theme);


    return (
        <button onClick={() => setTheme((prev) => !prev)} className={styles['theme-toggle']}>
            {theme ? (
                <img src="/assets/icon_theme-light.svg" alt="sun" className={styles['theme-icon']} />
            ) : (
                <img src="/assets/icon_theme-dark.svg" alt="moon" className={styles['theme-icon']} />
            )}
        </button>
    );
};
