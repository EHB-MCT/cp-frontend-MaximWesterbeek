import { Link, useLocation } from 'react-router';
import { ButtonItem } from '~/shared/services/button.types';
import styles from '~styles/app.module.scss';

export const Button = ({ name, link }: ButtonItem) => {
    // Check if the link is external or internal
    const isExternal = link.startsWith('http');

    // Check if the current location matches the button's link
    const location = useLocation();
    const isActive = location.pathname === link;

    if (isExternal) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className={`${styles['button']} ${isActive ? styles['button--active'] : ''}`}>
                <p className={styles['button__title']}>{name}</p>
            </a>
        );
    }

    return (
        <Link to={link} className={`${styles['button']} ${isActive ? styles['button--active'] : ''}`}>
            <p className={styles['button__title']}>{name}</p>
        </Link>
    );
};
