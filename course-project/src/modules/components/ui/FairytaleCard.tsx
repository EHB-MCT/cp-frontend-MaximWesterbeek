import { Link } from 'react-router';
import { FairytaleCardType } from '~/shared/services/fairytaleCard/fairytaleCard.service.types';
import styles from '~styles/app.module.scss';

export const FairytaleCard = ({ id, nameStudent, fairytale, imgThumbnail }: FairytaleCardType) => {
    const fallbackImage = `${import.meta.env.BASE_URL}assets/img-not-found.png`;
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = fallbackImage;
    };

    return (
        <Link
            to={`/parallax/${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles['card']}
        >
            <img
                src={imgThumbnail || fallbackImage}
                alt="fairytale"
                className={styles['card__img']}
                onError={handleImageError}

            />
            <div className={styles['card__card-info']}>
                <h2 className={styles['card__card-info__title']}>{fairytale}</h2>
                <p className={styles['card__card-info__name']}>{nameStudent}</p>
            </div>
        </Link>
    );
};