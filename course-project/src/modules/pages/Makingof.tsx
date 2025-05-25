import { useParams } from 'react-router';
import { Loader, ThemeToggle, YoutubeEmbed } from '~/components';
import { useGetMakingOfItems } from '~/shared';
import styles from '~styles/pages/makingof.module.scss';

export const MakingOf = () => {
    const fallbackImage = '/assets/img-not-found.png';
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = fallbackImage;
    };

    const { id } = useParams<{ id: string }>();
    const { isPending: isMakingOfItemsPending, data: makingOfItems } = useGetMakingOfItems();

    if (isMakingOfItemsPending) {
        return <Loader />;
    }

    const fairytale = makingOfItems?.find(item => item.id === id);

    if (!fairytale) {
        return <p>Sorry, dit sprookje is niet gevonden.</p>;
    }

    const lineBreak = fairytale.description.replace(/\n/g, "<br><br>")

    return (
        <div className={styles['makingOf-container']}>
            <h1 className={styles['makingOf-container__title']}>Making Of</h1>

            <div className={styles['theme-toggle-container']}>
                <ThemeToggle />
            </div>

            <div className={styles['makingOf-container__card']}>
                <div className={styles['makingOf-container__card__banner']}>
                    <img
                        src={fairytale.imgBanner || fallbackImage}
                        alt={fairytale.fairytale}
                        className={styles['makingOf-container__card__banner__img']}
                        onError={handleImageError}
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
                    <p
                        className={styles['makingOf-container__card__video-explainer__description']}
                        dangerouslySetInnerHTML={{ __html: lineBreak }}
                    >
                    </p>
                </div>

                <div className={styles['makingOf-container__card__extra-images']}>
                    <h3 className={styles['makingOf-container__card__extra-images__title']}>
                        Extra beeldmateriaal
                    </h3>
                    <span className={styles['divider']}></span>
                    <div className={styles['makingOf-container__card__extra-images__image-container']}>
                        {fairytale.imgsExtra.slice(0, 3).map((img, index) => (
                            <img
                                key={index}
                                src={img || fallbackImage}
                                alt={`extra-img-${index}`}
                                className={styles["makingOf-container__card__extra-images__image-container__img"]}
                                onError={handleImageError}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div >
    );
};