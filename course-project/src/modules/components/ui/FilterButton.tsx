import { FilterButtonItem } from '~/shared/services/filterButton.types';
import styles from '~styles/app.module.scss';

export const FilterButton = ({ name, isActive, onClick }: FilterButtonItem) => {
    return (
        <div className={`${styles['filter-button']} ${isActive ? styles['filter-button--active'] : ''}`} onClick={onClick}>
            <p className={styles['filter-button__title']}>{name}</p>
        </div>
    );
};