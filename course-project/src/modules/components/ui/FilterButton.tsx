import { FilterButtonItem } from '~/shared/services/filterButton.types';
import styles from '~styles/app.module.scss';

export const FilterButton = ({ name }: FilterButtonItem) => {
    return (
        <div className={styles['filter-button']}>
            <p className={styles['filter-button__title']}>{name}</p>
        </div>
    );
};