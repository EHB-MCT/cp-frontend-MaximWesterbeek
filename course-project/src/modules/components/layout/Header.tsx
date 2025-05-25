import styles from '~styles/app.module.scss';
import { Button } from '../ui/Button';
import { Link, useLocation, useParams } from 'react-router';
import { useGetParallaxLink } from '~/shared/hooks/useGetParallaxLink';
import { RefObject } from 'react';

interface HeaderProps {
    aboutRef: RefObject<HTMLDivElement | null>;
}

export const Header = ({ aboutRef }: HeaderProps) => {
    const location = useLocation();
    const isParallaxOrMakingOf = location.pathname.includes('/parallax') || location.pathname.includes('/makingOf');
    const isHome = location.pathname === '/';

    const params = useParams<{ id: string }>();
    const queryParams = new URLSearchParams(location.search);
    const id = params.id || queryParams.get("id");

    const { data: parallaxLinkItems } = useGetParallaxLink();
    const matchedItem = parallaxLinkItems?.find(item => item.id === id);
    const fairytaleLink = matchedItem?.fairytaleLink;

    const handleAboutClick = () => {
        aboutRef?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const renderButtons = () => {
        if (isParallaxOrMakingOf) {
            return (
                <>
                    <Button name="Home" link="/" />
                    {fairytaleLink && <Button name="Sprookje" link={`/parallax/${id}`} />}
                    <Button name="Making-Of" link={`/makingOf/${id}`} />
                </>
            );
        }

        return (
            <>
                <Button name="Home" link="/" />
                <Button name="Sprookjes" link="/fairytales" />
                <button
                    onClick={handleAboutClick}
                    className={styles['button']}
                >
                    <p className={styles['button__title']}>About</p>
                </button>
            </>
        );
    };

    return (
        <nav className={`${styles['navbar']} ${isHome ? styles['navbar--hidden'] : ''}`}>
            <div className={styles['navbar__container']}>
                <div className={`${styles['navbar__container__nav-wrapper']} ${isHome ? styles['navbar__container__nav-wrapper--hidden'] : ''}`}>
                    <Link to="/">
                        <img src="/assets/logo_white.svg" alt="Er was eens..." className={`${styles['navbar__container__nav-wrapper__logo']} ${isHome ? styles['navbar__container__nav-wrapper__logo--hidden'] : ''}`} />
                    </Link>

                    <div className={styles['navbar__container__nav-wrapper__nav-buttons']}>
                        {renderButtons()}
                    </div>
                </div>
            </div>
            <div className={`${styles['navbar__element']} ${isHome ? styles['navbar__element--hidden'] : ''}`} />
        </nav>
    );
}