import { SearchBarItem } from '~/shared/services/searchBar.types';
import styles from '~styles/app.module.scss';

export const SearchBar = ({ searchTerm, onSearchChange }: SearchBarItem) => {
    return (
        <form className={styles['search-bar']} onSubmit={(event) => event.preventDefault()}>
            <div className={styles['search-bar__search-wrapper']}>
                <img
                    src={`${import.meta.env.BASE_URL}assets/icon_search.svg`}
                    alt="magnifying glass"
                    className={styles['search-bar__search-wrapper__search-icon']}
                />
                <input
                    type="text"
                    placeholder="Zoek hier naar een sprookje"
                    className={styles['search-bar__search-wrapper__search-input']}
                    value={searchTerm}
                    onChange={(event) => onSearchChange(event.target.value)}
                />
            </div>
            <button type="submit" className={styles['search-button']}>
                <p className={styles['search-button__title']}>Zoek</p>
            </button>
        </form>
    );
};