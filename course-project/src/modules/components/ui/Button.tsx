import { Link } from 'react-router';
import { ButtonItem } from '~/shared/services/button.types';
import styles from '~styles/app.module.scss';

export const Button = ({ name, link }: ButtonItem) => {
    const isExternal = link.startsWith('http');

    if (isExternal) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles['button']}>
                <p className={styles['button__title']}>{name}</p>
            </a>
        );
    }

    return (
        <Link to={link} className={styles['button']}>
            <p className={styles['button__title']}>{name}</p>
        </Link>
    );
};
