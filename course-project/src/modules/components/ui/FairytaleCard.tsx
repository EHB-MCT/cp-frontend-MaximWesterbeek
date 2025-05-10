import { FairytaleCardType } from '~/shared/services/fairytaleCard/fairytaleCard.service.types';
import styles from '~styles/app.module.scss';

export const FairytaleCard = ({ id, fairytaleLink, nameStudent, fairytale, imgThumbnail }: FairytaleCardType) => {
    return (
        <a
            href={`${fairytaleLink}?id=${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles['card']}
        >
            <img src={imgThumbnail} alt="fairytale" className={styles['card__img']} />
            <div className={styles['card__card-info']}>
                <h2 className={styles['card__card-info__title']}>{fairytale}</h2>
                <p className={styles['card__card-info__name']}>{nameStudent}</p>
            </div>
        </a>
    );
};