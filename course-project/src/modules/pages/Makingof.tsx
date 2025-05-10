import { useParams } from 'react-router';
import { Loader, ThemeToggle, YoutubeEmbed } from '~/components';
import { useGetMakingOfItems } from '~/shared';
import styles from '~styles/pages/makingof.module.scss';

export const MakingOf = () => {
    const { id } = useParams<{ id: string }>();
    const { isPending: isMakingOfItemsPending, data: makingOfItems } = useGetMakingOfItems();

    if (isMakingOfItemsPending) {
        return <Loader />;
    }

    const fairytale = makingOfItems?.find(item => item.id === id);

    if (!fairytale) {
        return <p>Sorry, dit sprookje is niet gevonden.</p>;
    }

    return (
        <div className={styles['makingOf-container']}>
            <h1 className={styles['makingOf-container__title']}>Making Of</h1>

            <ThemeToggle />

            <div className={styles['makingOf-container__card']}>
                <div className={styles['makingOf-container__card__banner']}>
                    <img
                        src={fairytale.imgBanner}
                        alt={fairytale.fairytale}
                        className={styles['makingOf-container__card__banner__img']}
                    />
                    <div className={styles['makingOf-container__card__banner__info']}>
                        <h2 className={styles['makingOf-container__card__banner__info__fairytale']}>
                            {fairytale.fairytale}
                        </h2>
                        <p className={styles['makingOf-container__card__banner__info__nameStudent']}>
                            {fairytale.nameStudent}
                        </p>
                    </div>
                </div>

                <div className={styles['makingOf-container__card__video-explainer']}>
                    <h3 className={styles['makingOf-container__card__video-explainer__title']}>
                        Video - Explainer Movie
                    </h3>
                    <span className={styles['divider']}></span>
                    <div className={styles['makingOf-container__card__video-explainer__video']}>
                        <YoutubeEmbed embedId={fairytale.videoExplainer} />
                        {/* {fairytale.videoExplainer || "Geen video beschikbaar"} */}
                    </div>
                    <p className={styles['makingOf-container__card__video-explainer__description']}>
                        {fairytale.description}
                    </p>
                </div>

                <div className={styles['makingOf-container__card__extra-images']}>
                    <h3 className={styles['makingOf-container__card__extra-images__title']}>
                        Extra beeldmateriaal
                    </h3>
                    <span className={styles['divider']}></span>
                    <div className={styles['makingOf-container__card__extra-images__image-container']}>
                        {fairytale.imgsExtra?.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`extra-img-${index}`}
                                className={styles["makingOf-container__card__extra-images__image-container__img"]}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div >
    );
};