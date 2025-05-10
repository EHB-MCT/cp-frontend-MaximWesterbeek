import { Button, FairytaleCard, Loader, SearchBar, ThemeToggle } from '~/components';
import { useGetFairytaleCardItems } from '~/shared';
import styles from '~styles/pages/home.module.scss';

export const Home: React.FC = () => {
    const { isPending: isFairytaleCardPending, data: fairytaleCard } = useGetFairytaleCardItems();
    if (isFairytaleCardPending) {
        return (
            <Loader />
        )
    }

    return (
        <div className='home-container'>

            <div className={styles['welcome-section']}>
                <img src="/assets/logo_white.svg" alt="Er was eens..." className={styles['logo']} />
                <h1>De sprookjes poortaalsite voor alle interactieve sprookjeservaringen.</h1>
                <SearchBar />
            </div>

            <h1 className={styles['home-container__title']}>Populair</h1>
            <ThemeToggle />

            {fairytaleCard?.slice(0, 8).map((fairytaleCard) => {
                return (
                    <FairytaleCard nameStudent={fairytaleCard.nameStudent} fairytale={fairytaleCard.fairytale} imgThumbnail={fairytaleCard.imgThumbnail} />
                )
            })}

            <Button name="Alle sprookjes" link="/fairytales" />
        </div>
    );
};
