import { useParams } from 'react-router';
import { useGetParallaxLink } from '~/shared/hooks/useGetParallaxLink';
import styles from '~styles/pages/parallaxWrapperPage.module.scss';

export const ParallaxWrapperPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data: parallaxLinks } = useGetParallaxLink();

    const matchedItem = parallaxLinks?.find((item) => item.id === id);
    const fairytaleLink = matchedItem?.fairytaleLink;

    if (!matchedItem) {
        return <p>Loading or invalid fairytale ID...</p>;
    }

    return (
        <div className={styles['parallax-wrapper']}>
            <iframe
                src={`${fairytaleLink}?id=${id}`}
                title="Fairytale Parallax Page"
                className={styles['parallax-wrapper__iframe']}
                allowFullScreen
            />
        </div>
    );
};