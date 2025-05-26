import { useMemo, useState } from 'react';
import { FairytaleCard, FilterButton, Loader, NoResults, SearchBar, ThemeToggle } from '~/components';
import { useGetFairytaleCardItems } from '~/shared';
import styles from '~styles/pages/fairytales.module.scss';

const filterOptions = [
    "Gebroeders Grimm", "H. C. Andersen", "Duizend-en-één-nacht", "Charles Perrault",
    "Giambattista Basile", "uit Friesland", "uit Rusland", "andere sprookjes"
];

export const Fairytales = () => {
    // Retrieve fairytale card data from custom hook
    const { isPending: isFairytaleCardPending, data: fairytaleCard } = useGetFairytaleCardItems();

    // State to manage the filter selection and search term
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Filter the fairytale cards based on selected filter and search term
    const filteredFairytales = useMemo(() => {
        if (!fairytaleCard) return [];

        return fairytaleCard.filter((card) => {
            const matchesFilter = selectedFilter ? card.storyFrom === selectedFilter : true;
            const matchesSearch = card.fairytale.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesFilter && matchesSearch;
        });
    }, [fairytaleCard, selectedFilter, searchTerm]);

    return (
        <div className={styles['fairytale-container']}>
            <div className={styles['search-bar-container']}>
                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </div>

            <div className={styles['theme-toggle-container']}>
                <ThemeToggle />
            </div>

            <p className={styles['fairytale-container__filter-title']}>Filters:</p>
            <div className={styles['fairytale-container__filter-button-container']}>
                {filterOptions.map((filter) => (
                    <FilterButton
                        key={filter}
                        name={filter}
                        isActive={selectedFilter === filter}
                        onClick={() => setSelectedFilter(prev => prev === filter ? null : filter)}
                    />
                ))}
            </div>

            <h1 className={styles['fairytale-container__title']}>Sprookjes</h1>
            <div className={styles['card-container']}>
                {isFairytaleCardPending ? (
                    <Loader />
                ) : filteredFairytales.length === 0 ? (
                    <NoResults />
                ) : (
                    filteredFairytales.map((fairytaleCard) => (
                        <FairytaleCard
                            key={fairytaleCard.id}
                            id={fairytaleCard.id}
                            fairytaleLink={fairytaleCard.fairytaleLink}
                            nameStudent={fairytaleCard.nameStudent}
                            fairytale={fairytaleCard.fairytale}
                            imgThumbnail={fairytaleCard.imgThumbnail}
                            storyFrom={fairytaleCard.storyFrom}
                        />
                    ))
                )}
            </div>
        </div >
    );
};