import styles from '~styles/app.module.scss';
import { Button } from '../ui/Button';
import { Link, useLocation, useParams } from 'react-router';
import { useGetParallaxLink } from '~/shared';
import { RefObject, useContext } from 'react';
import { ThemeContext } from '~/shared/services/ThemeContextHandler';

interface FooterProps {
    aboutRef: RefObject<HTMLDivElement | null>;
}

export const Footer = ({ aboutRef }: FooterProps) => {
    const location = useLocation();
    const isParallaxOrMakingOf = location.pathname.includes('/parallax') || location.pathname.includes('/makingOf');

    const params = useParams<{ id: string }>();
    const queryParams = new URLSearchParams(location.search);
    const id = params.id || queryParams.get("id");

    const { data: parallaxLinkItems } = useGetParallaxLink();
    const matchedItem = parallaxLinkItems?.find(item => item.id === id);
    const fairytaleLink = matchedItem?.fairytaleLink;

    const { theme } = useContext(ThemeContext);

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
                <Button name="About" link="/about" />
            </>
        );
    };

    return (
        <nav className={styles['footer']}>
            <div className={styles['footer__element']} />

            <div className={styles['footer__container']}>
                <div className={styles['footer__container__nav-wrapper']}>
                    <Link to="/">
                        <img
                            src={theme ? "/assets/logo_red.svg" : "/assets/logo_white.svg"}
                            alt="Er was eens..."
                            className={styles['footer__container__nav-wrapper__logo']}
                        />
                    </Link>

                    <div ref={aboutRef} className={styles['footer__container__nav-wrapper__about']}>
                        <h1>About</h1>
                        <p>
                            Deze website is een portaalsite van een verzameling van sprookjesverhalen, verteld in de vorm van een interactieve parallax website. Elk sprookje heeft zijn eigen website waarin het sprookje verteld wordt terwijl je scrollt.
                            <br /><br />
                            Elke sprookjessite is gemaakt door een student aan de Erasmushogeschool Brussel in het academiejaar 2024-2025, voor het vak Front-End.
                        </p>
                    </div>

                    <div className={styles['footer__container__nav-wrapper__nav-buttons']}>
                        {renderButtons()}
                    </div>
                </div>
            </div>
        </nav>
    );
};