import { FairytaleCard, FilterButton, Loader, SearchBar, ThemeToggle } from '~/components';
import { useGetFairytaleCardItems } from '~/shared';
import styles from '~styles/pages/fairytales.module.scss';

export const Fairytales = () => {
    const { isPending: isFairytaleCardPending, data: fairytaleCard } = useGetFairytaleCardItems();
    if (isFairytaleCardPending) {
        return (
            <Loader />
        )
    }

    return (
        <div className={styles['fairytale-container']}>
            <SearchBar />

            <ThemeToggle />

            <p className={styles['fairytale-container__filter-title']}>Filters:</p>
            <div className={styles['fairytale-container__filter-button-container']}>
                <FilterButton name="Gebroeders Grimm" />
                <FilterButton name="H. C. Andersen" />
                <FilterButton name="Duizend-en-één-nacht" />
                <FilterButton name="Charles Perrault" />
                <FilterButton name="Giambattista Basile" />
                <FilterButton name="uit Friesland" />
                <FilterButton name="uit Rusland" />
                <FilterButton name="andere sprookjes" />
            </div>

            <h1 className={styles['fairytale-container__title']}>Sprookjes</h1>
            <div className={styles['card-container']}>
                {fairytaleCard?.map((fairytaleCard) => {
                    return (
                        <FairytaleCard key={fairytaleCard.id} id={fairytaleCard.id} fairytaleLink={fairytaleCard.fairytaleLink} nameStudent={fairytaleCard.nameStudent} fairytale={fairytaleCard.fairytale} imgThumbnail={fairytaleCard.imgThumbnail} />
                    )
                })}
            </div>

        </div >
    );
};