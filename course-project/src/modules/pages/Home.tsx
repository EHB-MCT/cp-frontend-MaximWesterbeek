import { Link } from 'react-router';
import { FairytaleCard, Loader, ThemeToggle } from '~/components';
import { useGetFairytaleCardItems } from '~/shared';
import styles from '~styles/pages/home.module.scss';

export const Home: React.FC = () => {
    const { isPending: isFairytaleCardPending, data: fairytaleCard } = useGetFairytaleCardItems();

    return (
        <div className={styles['home-container']}>

            <div className={styles['home-container__welcome-section']}>
                <div className={styles['home-container__welcome-section__info']}>
                    <img src="/assets/logo_white.svg" alt="Er was eens..." className={styles['home-container__welcome-section__info__logo']} />
                    <h1 className={styles['home-container__welcome-section__info__title']}>De sprookjes poortaalsite voor alle interactieve sprookjeservaringen.</h1>
                </div>
                <div className={styles['home-container__welcome-section__element']} />
            </div>

            <h1 className={styles['home-container__title']}>Populair</h1>
            <div className={styles['theme-toggle-container']}>
                <ThemeToggle />
            </div>

            <div className={styles['card-container']}>
                {isFairytaleCardPending ? (
                    <Loader />
                ) : (
                    fairytaleCard?.slice(0, 8).map((fairytaleCard) => (
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

            <Link to="/fairytales" className={styles['fairytales-button']}>
                <p className={styles['fairytales-button__title']}>Alle sprookjes</p>
            </Link>
        </div>
    );
};
